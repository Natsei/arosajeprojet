import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
          <View style={styles.userInfoContainer}>
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
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.05,
  },
  title: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: windowHeight * 0.05,
  },
  subtitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    marginTop: windowHeight * 0.03,
    textAlign: 'left',
  },
  subtitleDescription: {
    fontSize: windowWidth * 0.035,
    marginTop: windowHeight * 0.02,
    textAlign: 'left',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    resizeMode: 'contain',
    borderRadius: windowWidth * 0.02,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
  },
  cityImage: {
    width: windowWidth * 0.07,
    height: windowHeight * 0.04,
    resizeMode: 'cover',
    borderRadius: windowWidth * 0.01,
    marginRight: windowWidth * 0.02,
  },
  cityName: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
  blackLine: {
    height: 0.5,
    width: '90%',
    backgroundColor: 'lightgrey',
    marginVertical: windowHeight * 0.02,
  },
  rectangleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
    borderWidth: 0.4,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: windowWidth * 0.03,
  },
  smallImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'cover',
    borderRadius: windowWidth * 0.05,
    marginRight: windowWidth * 0.02,
  },
  userInfoContainer: {
    flex: 1,
  },
  userInfo: {
    fontSize: windowWidth * 0.035,
    fontWeight: 'bold',
  },
  userInfoDescription: {
    fontSize: windowWidth * 0.03,
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
    marginHorizontal: windowWidth * 0.02,
    borderRadius: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallerButton: {
    flex: 0.5,
  },
  buttonText: {
    fontSize: windowWidth * 0.035,
    fontWeight: 'bold',
  },
});

