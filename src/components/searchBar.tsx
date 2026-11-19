import seachBarStyle from "@/styles/seachBarStyle";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
  onSearch: (cityName: string) => void;
  loading?: boolean;
}

export default function SearchBar({
  onSearch,
  loading = false,
}: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={seachBarStyle.container}>
      <View style={seachBarStyle.inputContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Digite uma Cidade"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect
          editable={!loading}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          style={seachBarStyle.input}
        />
        <TouchableOpacity
          onPress={handleSearch}
          disabled={loading}
          style={seachBarStyle.button}
        >
          <Text style={seachBarStyle.buttonText}>
            {loading ? "Buscando" : "Buscar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
