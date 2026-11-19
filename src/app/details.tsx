import WeatherCard from "@/components/weatherCard";
import { getCorrentWeather } from "@/services/api";
import datailStyle from "@/styles/details";
import { useLocalSearchParams, useRouter } from "expo-router";
import type { WeatherData } from "@/types/weather";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
  const router = useRouter();
  const { cityName } = useLocalSearchParams<{ cityName: string }>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const getWeatherData = useCallback(async () => {
    if (!cityName?.trim()) {
      setWeatherData(null);
      setError("Cidade não informada");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await getCorrentWeather(cityName);
      if (result.success) {
        setWeatherData(result.data);
      } else {
        setWeatherData(null);
        setError(result.error);
      }
    } catch (requestError) {
      setWeatherData(null);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Não foi possível buscar o clima.",
      );
    } finally {
      setLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    void getWeatherData();
  }, [getWeatherData]);

  return (
    <SafeAreaView style={datailStyle.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={datailStyle.container}>
        <TouchableOpacity
          style={datailStyle.backButton}
          onPress={() => router.back()}
        >
          <Text style={datailStyle.backButtonText}>⬅ volta</Text>
        </TouchableOpacity>

        <View style={datailStyle.header}>
          <Text style={datailStyle.title}>Clima Atual</Text>
        </View>

        {loading && (
          <View style={datailStyle.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={datailStyle.loadingText}>Buscando clima...</Text>
          </View>
        )}

        {!loading && error && (
          <View style={datailStyle.errorContainer}>
            <Text style={datailStyle.errorText}>{error}</Text>
            <TouchableOpacity
              onPress={() => void getWeatherData()}
              style={datailStyle.retryButton}
            >
              <Text style={datailStyle.retryButtonText}>Tente Novamente</Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading && !error && weatherData && (
          <WeatherCard weather={weatherData} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
