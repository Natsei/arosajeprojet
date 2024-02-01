import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
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
    { id: 3, name: 'Lila mdr', image: require('../../assets/Plantes/Plante1.jpg'), description: 'Plante jolis' },
    { id: 4, name: 'Jonquille 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Plante pas ouf' },
    { id: 5, name: 'Lila mdr', image: require('../../assets/Plantes/Plante1.jpg'), description: 'Plante jolis' },
    { id: 6, name: 'Jonquille 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Plante pas ouf' },
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Les Plantes de Michel  </Text>
        <View style={styles.profileImage}>
          <Image source={require('../../assets/Profile/Image.png')} style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.rectangleContainer}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.cityImage}
        />
        <View>
          <Text style={styles.userInfo}>Montpellier</Text>
        </View>
      </View>

      <View style={styles.rectangleContainer}>
        <View>
          <Text style={styles.userInfo}>Salut c'est Michel, je suis botaniste depuis 1992</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: windowWidth * 0.05,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: windowHeight * 0.04,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center', // Aligner le texte du titre à gauche
  },
  rectangleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
    borderWidth: 0.5,
    borderColor: 'lightgrey', // Bordure noire
    borderRadius: 10,
    padding: windowWidth * 0.05,
    marginBottom: windowHeight * 0.012,
  },
  userInfo: {
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
  },
  smallImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'cover',
    borderRadius: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  profileImage: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.03,
    paddingLeft: windowWidth * 0.01,
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.025,
    marginBottom: windowWidth * 0.03,
  },
  plantItem: {
    alignItems: 'center',
    width: '48%', // Utilisez un pourcentage de la largeur de l'écran
    marginBottom: windowWidth * 0.03,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: windowWidth * 0.02,
  },
  plantImage: {
    width: '100%', // Ajustez la largeur de l'image pour remplir l'élément parent
    height: (windowWidth - windowWidth * 0.09) / 2,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowWidth * 0.02,
  },
  plantName: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    alignSelf: 'flex-start',  // Aligner à gauche
    paddingLeft: 7,
    marginTop: windowWidth * 0.01,  
  },
  plantDescription: {
    textAlign: 'right', 
    alignSelf: 'flex-start',
    paddingLeft: 7,
    marginTop: windowWidth * 0.01,
    marginBottom: windowHeight * 0.007,
  },
  cityImage: {
    width: 14,
    height: 22,
    resizeMode: 'cover',
    borderRadius: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  cityName: {
    fontSize: windowHeight * 0.025, // Assurez-vous que la taille du texte est la même que pour les sous-titres
    fontWeight: 'bold',
  },
});
