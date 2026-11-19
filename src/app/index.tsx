import { useLocation } from "@/hooks/useLocation";
import SearchBar from "@/components/searchBar";
import { getCoordinate } from "@/services/api";
import homeStyle from "@/styles/homeStyle";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();
  const { getCurrentLocation, loading } = useLocation();

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: "/details",
      params: { cityName },
    });
  };

  const handleLocation = async () => {

    const locationResult = await getCurrentLocation();
    
    if (!locationResult.success) {
      Alert.alert("Error", locationResult.error);
    } else {
      const { latitude, longitude } = locationResult.coordinate;

      const weatherResult = await getCoordinate(latitude, longitude);
      
      if (!weatherResult.success) {
        Alert.alert("Error", weatherResult.error);
      } else {
        router.push({
          pathname: "/details",
          params: { cityName: weatherResult.data.name },
        });
      }
    }
  };

  return (
    <SafeAreaView style={homeStyle.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyle.container}>
        <View style={homeStyle.header}>
          <Text style={homeStyle.title}>⛅ Dev-Tempo</Text>
          <Text style={homeStyle.subtitle}>Sua previsão do tempo</Text>
        </View>

        <SearchBar onSearch={handleSearch} />

        <TouchableOpacity onPress={handleLocation} style={homeStyle.gpsButton}>
          {loading ? (
            <ActivityIndicator size={"large"} color={"#fff"} />
          ) : (
            <Text style={homeStyle.gpsButtonText}>Usar minha localização</Text>
          )}
        </TouchableOpacity>

        <View style={homeStyle.emptyContainer}>
          <Text style={homeStyle.emptyText}>
            Digite uma cidade para começar
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
