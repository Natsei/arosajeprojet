import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as style from '../../style/styles';// Importez vos styles
import { useNavigation } from '@react-navigation/native';
import useSWR from "swr";
import { ChevronLeft } from "lucide-react-native";
import global from '../../global';

const windowWidth = Dimensions.get('window').width;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then((res) =>
    res.json()
  );

export function UserPlantScreen({ route }) {
  const { id } = route.params;

  const navigation = useNavigation();

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/annonces/getAllByUtilisateur?id=" + id,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const handleDetailPlante = (plantId) => {
    navigation.navigate('DetailScreen', { id: plantId });
  };

  return (
    <View style={styles.plantSection}>
        {data.map((plant) => (
          <TouchableOpacity
            key={plant.plante.id}
            onPress={() => handleDetailPlante(plant.plante.id)}
            style={styles.plantItem}
          >
            {/* <Image source={plant.plante.image} style={styles.plantImage} /> */}
            <Text style={styles.plantName}>{plant.plante.libelle}</Text>
            <Text>{plant.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  plantItem: {
    alignItems: 'center',
    marginBottom: windowWidth * 0.03,
  },
  plantImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: style.BORDER_SIZE.border,
    marginBottom: windowWidth * 0.02,
  },
  plantName: {
    fontSize: windowWidth * 0.05,
    fontWeight: style.FONT_WEIGHTS.bold,
  },
});
