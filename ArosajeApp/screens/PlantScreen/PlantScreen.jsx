import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function PlantScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(['Petites Plantes', 'Arbuste', 'Fleurs', 'Plantes d\'intérieurs', 'Plantes Aquatiques']);
  const [plants, setPlants] = useState([
    { id: 1, name: 'Lila mdr', image: require('../../assets/Plantes/Plante1.jpg'), description: 'Plante jolis' },
    { id: 2, name: 'Jonquille 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Plante pas ouf' },
  ]);

  const handleAddPicturePress = () => {
    navigation.navigate('AddPictureScreen');
  };

  const handleCategoryPress = (category) => {
    console.log(`Navigating to ${category} page`);
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handlePlantPress = (plantName) => {
    console.log(`Navigating to ${plantName} details page`);
  };

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.title}>Les Plantes de Michel  </Text>
      <View style={styles.profileImage}>
          <Image source={require('../../assets/Profile/Image.png')} style={styles.profileImage} />
      </View>
    </View>

    <View style={styles.plantSection}>
      {plants.map((plant) => (
        <TouchableOpacity
          key={plant.id}
          onPress={() => handlePlantPress(plant.name)}
          style={styles.plantItem}
        >
          <Image source={plant.image} style={styles.plantImage} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantDescription}>{plant.description}</Text>
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: windowHeight * 0.04,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center', // Aligner le texte du titre à gauche
  },
  profileImage: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.03,
    paddingLeft: windowWidth * 0.035,
    marginTop: windowWidth * 0.022,
  },
  imageAboveCategories: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.4,
    marginBottom: windowWidth * 0.08,
    borderRadius: windowWidth * 0.05,
  },
  plantSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: windowWidth * 0.95,  // Modifier la largeur de la section
    alignSelf: 'center',  // Centrer la section horizontalement
  },
  plantItem: {
    alignItems: 'center',
    marginBottom: windowWidth * 0.03,
    borderWidth: 0,  // Ajouter une bordure de 5 pixels
    borderColor: 'black',  // Couleur de la bordure
    borderRadius: 15,  // Facultatif : ajouter un rayon de bordure pour les coins arrondis
    padding: windowWidth * 0.02,  // Ajouter du rembourrage à l'intérieur de la bordure
    backgroundColor: '#FFFFFF',
  },
  plantImage: {
    width: windowWidth * 0.4,  // Ajuster la largeur de l'image
    height: windowWidth * 0.4,  // Ajuster la hauteur de l'image
    borderRadius: windowWidth * 0.02,
    marginBottom: windowWidth * 0.02,
  },
  plantName: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    alignSelf: 'flex-start',  // Aligner à gauche
    paddingLeft: 7,
    marginTop: windowWidth * 0.01,  // Ajuster l'espace en haut du nom
  },
  plantDescription: {
    textAlign: 'left',  // Aligner à gauche
    alignSelf: 'flex-start',
    paddingLeft: 7,
    marginTop: windowWidth * 0.01,
    marginBottom: windowHeight * 0.007,
  },
});
