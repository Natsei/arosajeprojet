import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
    paddingBottom: 50, // Ajout de marge en bas
  },
  title: {
    fontSize: 50,
    width: 315,
    marginLeft: 160, // Ajoutez la marge à gauche ici
    marginBottom: 40,
    color: '#F2E8CF',
  },  
  buttonContainer: {
    width: '100%', // Agrandir à la largeur maximale
    paddingHorizontal: 20, // Ajout de padding horizontal pour espacement
  },
  button: {
    display: 'flex',
    width: 350,
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Ajout de marge entre les boutons
    borderRadius: 16,
    backgroundColor: '#F2E8CF',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center', // Centrer le texte dans le bouton
  },
});
