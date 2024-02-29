import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as style from '../../style/styles';// Importez vos styles

const windowWidth = Dimensions.get('window').width;

export function UserPlantScreen({ navigation }) {

  const handleInscription = () => {
    navigation.navigate('DetailScreen'); // Rediriger vers la page Inscription
  };

  return (
    <View style={styles.plantSection}>
        {plants.map((plant) => (
          <TouchableOpacity
            key={plant.id}
            onPress={() => handlePlantPress(plant.name)}
            style={styles.plantItem}
          >
            <Image source={plant.image} style={styles.plantImage} />
            <Text style={styles.plantName}>{plant.name}</Text>
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
