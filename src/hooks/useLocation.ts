import * as Location from "expo-location";
import { useState } from "react";

interface Coordinate {
  longitude: number;
  latitude: number;
}

type LocationResult =
  | { success: true; coordinate: Coordinate }
  | { success: false; error: string };

export const useLocation = () => {
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async (): Promise<LocationResult> => {
    try {
      setLoading(true);

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return {
          success: false,
          error: "Permissão Negada",
        };
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      return {
        success: true,
        coordinate: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: "Erro ao Buscar Clima",
      };
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    getCurrentLocation
  }
};
