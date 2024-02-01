import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    justifyContent: 'flex-end', 
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Alignement vertical en bas
    alignItems: 'center',
    paddingBottom: windowHeight * 0.05, 
  },
  title: {
    fontSize: windowWidth * 0.1, // Utilisation d'une valeur relative pour la taille de police
    width: windowWidth * 0.8, 
    marginLeft: windowWidth * 0.2,
    marginBottom: windowHeight * 0.04, 
    color: '#F2E8CF',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: windowWidth * 0.05, 
  },
  button: {
    width: windowWidth * 0.9,
    padding: windowHeight * 0.03, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02, 
    borderRadius: windowWidth * 0.04, 
    backgroundColor: '#F2E8CF',
  },
  buttonText: {
    color: '#000000',
    fontSize: windowWidth * 0.04, 
    textAlign: 'center', 
  },
});

export default styles;
