import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export function DetailScreen({ navigation }) {

  const handleInscription = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails</Text>

      <View style={styles.content}>
        <Image
          source={require('../../assets/Profile/Image.png')}
          style={styles.image}
        />

        <Text style={styles.subtitle}>Nom de la plante</Text>
        <Text>Plante A</Text>

        <View style={styles.cityContainer}>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.cityImage}
          />
          <Text style={styles.cityName}>Montpellier</Text>
        </View>
        <View style={styles.blackLine} />

        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.subtitleDescription}>Héééé c'est une description ouuuuu, non mais en vrai, je pourrais parler de ma plante pendant
          des heures car en vrai c'est un hér
          Héééé c'est une description ouuuuu, non mais en vrai, je pourrais parler de ma plante pendant
          des heures car en vrai c'est un hér
        </Text>

        <View style={styles.rectangleContainer}>
          <Image
            source={require('../../assets/Profile/Image.png')}
            style={styles.smallImage}
          />
          <View>
            <Text style={styles.userInfo}>Michel Durand</Text>
            <Text style={styles.userInfoDescription}>Je suis Michel et j’aime les plantes</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.smallerButton]} onPress={handleInscription}>
          <Text style={styles.buttonText}>Appeler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleInscription}>
          <Text style={styles.buttonText}>Prendre contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    padding: windowWidth * 0.05, // Ajouter un padding global à gauche
  },
  title: {
    fontSize: windowHeight * 0.04,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center', // Aligner le texte du titre à gauche
  },
  subtitle: {
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.015,
    textAlign: 'left', // Aligner le texte des sous-titres à gauche
  },
  subtitleDescription: {
    fontSize: 18,
    marginTop: windowHeight * 0.015,
    textAlign: 'left', // Aligner le texte des sous-titres à gauche
  },
  
  content: {
    alignItems: 'flex-start',
    marginTop: windowHeight * 0.02,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    borderRadius: windowHeight * 0.02,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.015,
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
  blackLine: {
    height: 0.5,
    width: '90%',
    backgroundColor: 'lightgrey',
    marginBottom: windowHeight * 0.015, // Ajustez la marge en fonction de vos besoins
    marginTop: windowHeight * 0.015,
  },
  rectangleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
    borderWidth: 0.4,
    borderColor: 'lightgrey', // Bordure noire
    borderRadius: 10,
    padding: windowWidth * 0.03
  },
  smallImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'cover',
    borderRadius: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  userInfoContainer: {
    borderWidth: 1,
    borderColor: 'black', // Bordure noire
    marginLeft: windowWidth * 0.02,
    padding: windowWidth * 0.02,
    borderRadius: windowHeight * 0.01,
  },
  userInfo: {
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
  },
  userInfoDescription: {
    fontSize: windowHeight * 0.018,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.03,
  },
  button: {
    backgroundColor: '#F2E8CF',
    flex: 1,
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.05,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: windowHeight * 0.017,
    alignItems: 'center', // Aligner le contenu au centre
    justifyContent: 'center', // Aligner le contenu au centre
  },
  smallerButton: {
    flex: 0.5, // Utilisez un flex plus petit pour le bouton "Appeler"
  },
  buttonText: {
    textAlign: 'center',
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
  },
});
