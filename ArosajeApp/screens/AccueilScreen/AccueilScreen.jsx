import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements'; // Import du composant SearchBar
import { useNavigation } from '@react-navigation/native';
import { TEXT_STYLES, COLORS, FONT_WEIGHTS } from '../../style/styles';// Importez vos styles


const windowWidth = Dimensions.get('window').width;

export function AccueilScreen() {
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
    { id: 7, name: 'Jonquille 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Plante pas ouf' },
    { id: 8, name: 'Lila mdr', image: require('../../assets/Plantes/Plante1.jpg'), description: 'Plante jolis' },
    { id: 9, name: 'Jonquille 2', image: require('../../assets/Plantes/Plante2.jpg'), description: 'Plante pas ouf' },
  ]);
  const [searchText, setSearchText] = useState('');

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
      <View style={styles.leftHeader}>
        <Text style={styles.villeText}>Montpellier</Text>
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity onPress={handleAddPicturePress} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfile}>
          <Image source={require('../../assets/Profile/profilepicture.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  
        <View style={styles.searchBarTop}>
          <SearchBar
            placeholder="Rechercher des plantes"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            lightTheme
            round
            containerStyle={styles.searchBarTop}
            inputContainerStyle={styles.inputContainer}
          />
        </View>
        
  
        <Image
          source={require('../../assets/Plantes/picture_home.png')}
          style={styles.imageAboveCategories}
        />
  
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
          <View style={styles.categoryButtons}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => handleCategoryPress(category)}
                style={[
                  styles.categoryButton,
                  {
                    backgroundColor: selectedCategory === category ? COLORS.button : COLORS.primary,
                    fontWeight: selectedCategory === category ? FONT_WEIGHTS.bold : FONT_WEIGHTS.normal,
                  },
                ]}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
  
        <ScrollView style={styles.plantScrollView} showsVerticalScrollIndicator={true}>
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
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: "#F5F5F5",
  },
  leftHeader: {
    flex: 1.5,
    marginLeft: windowWidth * -0.02,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: windowWidth * -0.08,
  },
  villeText: {
    fontSize: windowWidth * 0.06,
    marginLeft: windowWidth * 0.02,
  },
  profileImage: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.04,
    marginRight: windowWidth * 0.03,
    marginTop: windowWidth * 0.01,
  },
  addButton: {
    backgroundColor: COLORS.button,
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
    marginTop: windowWidth * 0.01,
  },
  addButtonText: {
    color: 'black',
    marginRight: windowWidth * -0.01,
    fontSize: windowWidth * 0.09,
    width: windowWidth * 0.05,
    fontWeight: FONT_WEIGHTS.bold,
  },
  searchBarTop: {
    backgroundColor: '#F5F5F5',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.03,
  },
  searchInput: {
    backgroundColor: COLORS.primary,
    borderRadius: windowWidth * 0.04,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingHorizontal: windowWidth * 0.03,
    color: 'black',
    fontSize: windowWidth * 0.04,
  },
  imageAboveCategories: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.4,
    marginLeft: 20,
    marginBottom: windowWidth * 0.08,
    borderRadius: windowWidth * 0.05,
  },
  categoryScrollView: {
    maxHeight: windowWidth * 0.1,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: windowWidth * 0.02,
  },
  categoryButton: {
    padding: windowWidth * 0.02,
    borderRadius: windowWidth * 0.02,
    marginRight: windowWidth * 0.02,
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
    width: '48%',
    marginBottom: windowWidth * 0.03,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    padding: windowWidth * 0.02,
  },
  plantImage: {
    width: '100%',
    height: (windowWidth - windowWidth * 0.09) / 2.5,
    borderRadius: windowWidth * 0.02,
    marginBottom: windowWidth * 0.02,
  },
  plantName: {
    fontSize: windowWidth * 0.05,
    fontWeight: FONT_WEIGHTS.bold,
  },
  plantScrollView: {
    flex: 1.5,
    marginTop: windowWidth * 0.02,
  },
});

export default AccueilScreen;