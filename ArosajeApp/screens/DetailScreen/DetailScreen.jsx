import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as style from '../../style/styles';// Importez vos styles
import useSWR from "swr";
import global from '../../global';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then((res) =>
    res.json()
  );

export function DetailScreen({ route }) {

  const { id } = route.params;

  const navigation = useNavigation();

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/annonces/getById?id="+id,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

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

        <Text style={styles.subtitle}>{data.plante.libelle}</Text>
        <Text></Text>

        <View style={styles.cityContainer}>
          <Image
            source={require('../../assets/Vector.png')}
            style={styles.cityImage}
          />
          <Text style={styles.cityName}>{data.auteur.ville}</Text>
        </View>
        <View style={styles.blackLine} />

        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.subtitleDescription}>{data.description}</Text>

        <View style={styles.rectangleContainer}>
          <Image
            source={{
              uri:
                "http://localhost:3000/img/uploads/" + data.auteur.cheminPhoto,
            }}
            style={styles.smallImage}
          />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userInfo}>{data.auteur.prenom} {data.auteur.nom}</Text>
            <Text style={styles.userInfoDescription}>{data.auteur.description}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
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
    fontWeight: style.FONT_WEIGHTS.bold,
    textAlign: 'center',
    marginBottom: windowHeight * 0.05,
  },
  subtitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: style.FONT_WEIGHTS.bold,
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
    borderRadius: style.BORDER_SIZE.border,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
  },
  cityImage: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.035,
    resizeMode: 'cover',
    borderRadius: style.BORDER_SIZE.border,
    marginRight: windowWidth * 0.02,
  },
  cityName: {
    fontSize: windowWidth * 0.04,
    fontWeight: style.FONT_WEIGHTS.bold,
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
    borderRadius: style.BORDER_SIZE.border,
    padding: windowWidth * 0.03,
  },
  smallImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'cover',
    borderRadius: style.BORDER_SIZE.border,
    marginRight: windowWidth * 0.02,
  },
  userInfoContainer: {
    flex: 1,
  },
  userInfo: {
    fontSize: windowWidth * 0.035,
    fontWeight: style.FONT_WEIGHTS.bold,
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
    backgroundColor: style.COLORS.button,
    flex: 1,
    paddingVertical: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: style.BORDER_SIZE.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallerButton: {
    flex: 0.5,
  },
  buttonText: {
    fontSize: windowWidth * 0.05,
    fontWeight: style.FONT_WEIGHTS.bold,
  },
});

