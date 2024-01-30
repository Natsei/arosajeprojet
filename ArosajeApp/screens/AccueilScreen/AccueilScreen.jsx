import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function AccueilScreen() {
  const navigation = useNavigation();

  const handleAddPicturePress = () => {
    navigation.navigate('AddPictureScreen');
  };

  const handleCategoryPress = (category) => {
    console.log(`Navigating to ${category} page`);
    // Ajoutez la logique de redirection vers la page correspondante ici
  };

  const handlePlantPress = (plantName) => {
    console.log(`Navigating to ${plantName} details page`);
    // Ajoutez la logique de redirection vers la page de détails de la plante ou toute autre action souhaitée
  };

  const plantData = [
    { id: 1, name: 'Nom de la Plante 1', image: require('../../assets/Plantes/Plante1.jpg'), description: 'Description de la Plante 1' },
    { id: 2, name: 'Nom de la Plante 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Description de la Plante 2' },
    // Ajoutez d'autres données si nécessaire
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* En-tête avec le bouton d'ajout à gauche de l'image de profil */}
      <View style={styles.header}>
        {/* Bouton d'ajout */}
        <TouchableOpacity onPress={handleAddPicturePress} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        {/* Image de profil (à remplacer par votre image de profil) */}
        <Image source={require('../../assets/Profile/profilepicture.png')} style={styles.profileImage} />
      </View>

      {/* Contenu principal avec les catégories et les plantes */}
      <View style={styles.container}>
        {/* Boutons de catégories */}
        <View style={styles.categoryButtons}>
          <TouchableOpacity onPress={() => handleCategoryPress('petites plantes')} style={styles.categoryButton}>
            <Text>Petites Plantes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCategoryPress('arbuste')} style={styles.categoryButton}>
            <Text>Arbuste</Text>
          </TouchableOpacity>
          {/* Ajoutez d'autres boutons de catégories si nécessaire */}
        </View>

        {/* Section avec les plantes (générée dynamiquement à partir des données) */}
        <View style={styles.plantSection}>
          {plantData.map((plant) => (
            <TouchableOpacity key={plant.id} onPress={() => handlePlantPress(plant.name)} style={styles.plantItem}>
              <Image source={plant.image} style={styles.plantImage} />
              <Text>{plant.name}</Text>
              <Text>{plant.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    // Ajoutez d'autres styles nécessaires pour votre image de profil
  },
  addButton: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
  },
  plantSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  plantItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  plantImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    // Ajoutez d'autres styles nécessaires pour vos images de plantes
  },
});
