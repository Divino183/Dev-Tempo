import axios from "axios";
import { WeatherData, WeatherError } from "../types/weather";

export type WeatherResult =
  | { success: true; data: WeatherData }
  | { success: false; error: string };

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_KEY_API;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    lang: "pt_br",
    units: "metric",
  },
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const getErroMessage = (statusCode: number): string => {
  switch (statusCode) {
    case 400:
      return "Requisição inválida";

    case 401:
      return "Chave de acesso inválida";

    case 404:
      return "Cidade não encontrada";

    case 429:
      return "Limite de busca atingida, Tente novamente mais tarde";

    case 500:
      return "Error do servidor, Tente novamente mais tarde";

    case 503:
      return "Servidor Indisponivel";

    default:
      return "Erro ao buscar o clima, Tente novamente";
  }
};

export const getCorrentWeather = async (
  cityName: string,
): Promise<WeatherResult> => {
  try {
    const trimmedCity = cityName.trim();
    if (!trimmedCity) {
      return {
        success: false,
        error: "Cidade não informada",
      };
    }

    const response = await api.get<WeatherData>("/weather", {
      params: {
        q: trimmedCity,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErroMessage(err.response.status),
        };
      } else if (err.request) {
        return {
          success: false,
          error: "Sem conexão com o servidor",
        };
      } else {
        return {
          success: false,
          error: "Erro ao buscar clima",
        };
      }
    }

    return {
      success: false,
      error: "Não conseguiu buscar o clima",
    };
  }
};

export const getCoordinate = async (
  latitude: number,
  longitude: number,
): Promise<WeatherResult> => {
  try {
    const response = await api.get<WeatherData>("/weather", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    if (axios.isAxiosError<WeatherError>(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErroMessage(err.response.status),
        };
      };
    }
  }
  return {
    success: false,
    error: "Não conseguiu buscar o clima",
  };
};

export const getWeatherIcon = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
