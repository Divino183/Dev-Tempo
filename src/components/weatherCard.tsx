import { getWeatherIcon } from "@/services/api";
import weatherCard from "@/styles/weatherCard";
import type { WeatherData } from "@/types/weather";
import { Image, Text, View } from "react-native";

interface WeatherProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherProps) {
  const condition = weather.weather[0];

  return (
    <View style={weatherCard.card}>
      <Text style={weatherCard.city}>{weather.name}</Text>
      {weather.weather[0] && (
        <Image
          source={{ uri: getWeatherIcon(condition.icon) }}
          style={{ width: 100, height: 100, alignSelf: "center" }}
          resizeMode="contain"
        />
      )}
      <Text style={weatherCard.temperature}>
        {Math.round(weather.main.temp)}°C
      </Text>
      <Text style={weatherCard.description}>
        {condition?.description ?? "Condição indisponível"}
      </Text>

      <View style={weatherCard.details}>
        <View style={weatherCard.detail}>
          <Text style={weatherCard.label}>Sensação</Text>
          <Text style={weatherCard.value}>
            {Math.round(weather.main.feels_like)}°C
          </Text>
        </View>
        <View style={weatherCard.detail}>
          <Text style={weatherCard.label}>Umidade</Text>
          <Text style={weatherCard.value}>{weather.main.humidity}%</Text>
        </View>
        <View style={weatherCard.detail}>
          <Text style={weatherCard.label}>Vento</Text>
          <Text style={weatherCard.value}>{weather.wind.speed} m/s</Text>
        </View>
        <View style={weatherCard.detail}>
          <Text style={weatherCard.label}>Mínima / Máxima</Text>
          <Text style={weatherCard.value}>
            {Math.round(weather.main.temp_min)}° /{" "}
            {Math.round(weather.main.temp_max)}°C
          </Text>
        </View>
      </View>
    </View>
  );
}
