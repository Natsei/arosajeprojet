import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function AccueilScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(['Petites Plantes', 'Arbuste', 'Fleurs', 'Plantes d\'intérieurs', 'Plantes Aquatiques']);
  const [plants, setPlants] = useState([ //Faudra remplacer par les vrais données de la base
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
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleAddPicturePress} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfile}>
        <Image source={require('../../assets/Profile/profilepicture.png')} style={styles.profileImage}/>
        </TouchableOpacity>   
      </View>

      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
          <View style={styles.categoryButtons}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => handleCategoryPress(category)}
                style={[
                  styles.categoryButton,
                  { backgroundColor: selectedCategory === category ? '#F2E8CF' : 'white' }, //#F2E8CF quand on clique sinon Blanc
                ]}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

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
    backgroundColor: "#FFFFFF"
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  addButton: {
    backgroundColor: '#F2E8CF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFFFFF"
  },
  categoryScrollView: {
    maxHeight: 50,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
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
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
