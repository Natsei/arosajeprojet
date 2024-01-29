import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Dimensions } from 'react-native';

// Créez un navigateur stack
const Stack = createStackNavigator();

export function LoginScreen() {
  const navigation = useNavigation();

  const handleConnecter = () => {
    // Naviguer vers l'écran ConnexionScreen
    navigation.navigate('Connexion');
  };

  const handleInscription = () => {
    // Action à effectuer lorsque le bouton "S'inscrire" est pressé
    navigation.navigate('Inscription');
  };

  return (
    <ImageBackground
      source={require('../../assets/Home/homePicture.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Arosa'je</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleConnecter}>
            <Text style={styles.buttonText}>Se Connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleInscription}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end', // Alignement vertical en bas
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Alignement vertical en bas
    alignItems: 'center',
    paddingBottom: windowHeight * 0.05, // Utilisation d'une valeur relative pour paddingBottom
  },
  title: {
    fontSize: windowWidth * 0.1, // Utilisation d'une valeur relative pour la taille de police
    width: windowWidth * 0.8, // Utilisation d'une valeur relative pour la largeur
    marginLeft: windowWidth * 0.2, // Utilisation d'une valeur relative pour marginLeft
    marginBottom: windowHeight * 0.04, // Utilisation d'une valeur relative pour marginBottom
    color: '#F2E8CF',
  },
  buttonContainer: {
    width: '100%', // Agrandir à la largeur maximale
    paddingHorizontal: windowWidth * 0.05, // Utilisation d'une valeur relative pour paddingHorizontal
  },
  button: {
    width: windowWidth * 0.9, // Utilisation d'une valeur relative pour la largeur
    padding: windowHeight * 0.03, // Utilisation d'une valeur relative pour le rembourrage
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02, // Utilisation d'une valeur relative pour marginBottom
    borderRadius: windowWidth * 0.04, // Utilisation d'une valeur relative pour la bordure
    backgroundColor: '#F2E8CF',
  },
  buttonText: {
    color: '#000000',
    fontSize: windowWidth * 0.04, // Utilisation d'une valeur relative pour la taille de police
    textAlign: 'center', // Centrer le texte dans le bouton
  },
});

export default styles;
