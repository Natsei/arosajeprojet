import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export function HomeScreen() {
  const handleConnecter = () => {
    // Action à effectuer lorsque le bouton "Se Connecter" est pressé
    console.log("Bouton 'Se Connecter' pressé !");
  };

  const handleInscription = () => {
    // Action à effectuer lorsque le bouton "S'inscrire" est pressé
    console.log("Bouton 'S'inscrire' pressé !");
  };

  return (
    <ImageBackground
      source={require('../../assets/Home/homePicture.png')} // Remplacez par le chemin correct de votre image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Arosa'je</Text>
        <TouchableOpacity style={styles.button} onPress={handleConnecter}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleInscription}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
});
