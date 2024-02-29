import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from '../../style/styles';// Importez vos styles

//Page de base quand on arrive sur l'applications
export function HomeScreen() {
  const navigation = useNavigation();

  const handleConnecter = () => {
    // Naviguer vers l'écran ConnexionScreen
    navigation.navigate('ConnexionScreen');
  };

  const handleInscription = () => {
    // Action à effectuer lorsque le bouton "S'inscrire" est pressé
    navigation.navigate('InscriptionScreen');
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
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 50, 
  },
  title: {
    fontSize: style.FONT_SIZES.extra_large,
    textAlign: 'center',
    marginBottom: 40,
    color: style.COLORS.button,
  },  
  buttonContainer: {
    width: '100%', 
    paddingHorizontal: 20, 
  },
  button: {
    display: 'flex',
    width: 350,
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
    borderRadius: style.BORDER_SIZE.border,
    backgroundColor: style.COLORS.button,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center', 
  },
});
