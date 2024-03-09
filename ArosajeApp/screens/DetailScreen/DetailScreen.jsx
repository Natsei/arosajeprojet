import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import useSWR from "swr";
import global from '../../global';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then((res) =>
    res.json()
  );

export function DetailScreen({ route }) {

  const { id } = route.params;

  const navigation = useNavigation();

  /*const [plante, setPlante] = React.useState([]);

  React.useEffect(() => {
    getPlante();
  }, []);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbHMwNXR6c3EwMDA0MTM0ZDBpZTJ5Y3UyIiwiaWF0IjoxNzA4OTQ1NDAyLCJleHAiOjE3MDg5NDkwMDJ9.ZPkngUQKSJhQNaOuj9p3DxEvcj7QI7H7TUMzCHq1BWo";

  const getPlante = () => {
    fetch("http://localhost:3000/api/plantes/getById?id=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ajoutez le token ici
      },
    })
      .then((response) => {
        console.log(response.status);
        console.log(response.headers);
        return response.json();
      })
      .then((response) => {
        console.log(response.data);
        setPlante(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de la plante :",
          error
        );
      });
  };*/

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/annonces/getById?id="+id,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const handleInscription = () => {
    navigation.navigate("ChatScreen");
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails</Text>

      <View style={styles.content}>
        <Image
          source={require("../../assets/Profile/Image.png")}
          style={styles.image}
        />

        <Text style={styles.subtitle}>{data.plante.libelle}</Text>
        <Text></Text>

        <View style={styles.cityContainer}>
          <Image
            source={require("../../assets/Vector.png")}
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
          <View>
            <Text style={styles.userInfo}>
              {data.auteur.prenom} {data.auteur.nom}
            </Text>
            <Text style={styles.userInfoDescription}>
              {data.auteur.description}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.smallerButton]}
          onPress={handleInscription}
        >
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
    justifyContent: "center",
    padding: windowWidth * 0.05, // Ajouter un padding global à gauche
  },
  title: {
    fontSize: windowHeight * 0.04,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center", // Aligner le texte du titre à gauche
  },
  subtitle: {
    fontSize: windowHeight * 0.025,
    fontWeight: "bold",
    marginTop: windowHeight * 0.015,
    textAlign: "left", // Aligner le texte des sous-titres à gauche
  },
  subtitleDescription: {
    fontSize: 18,
    marginTop: windowHeight * 0.015,
    textAlign: "left", // Aligner le texte des sous-titres à gauche
  },

  content: {
    alignItems: "flex-start",
    marginTop: windowHeight * 0.02,
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: "contain",
    borderRadius: windowHeight * 0.02,
  },
  cityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: windowHeight * 0.015,
  },
  cityImage: {
    width: 14,
    height: 22,
    resizeMode: "cover",
    borderRadius: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  cityName: {
    fontSize: windowHeight * 0.025, // Assurez-vous que la taille du texte est la même que pour les sous-titres
    fontWeight: "bold",
  },
  blackLine: {
    height: 0.5,
    width: "90%",
    backgroundColor: "lightgrey",
    marginBottom: windowHeight * 0.015, // Ajustez la marge en fonction de vos besoins
    marginTop: windowHeight * 0.015,
  },
  rectangleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: windowHeight * 0.02,
    borderWidth: 0.4,
    borderColor: "lightgrey", // Bordure noire
    borderRadius: 10,
    padding: windowWidth * 0.03,
  },
  smallImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: "cover",
    borderRadius: windowHeight * 0.01,
    marginRight: windowWidth * 0.02,
  },
  userInfoContainer: {
    borderWidth: 1,
    borderColor: "black", // Bordure noire
    marginLeft: windowWidth * 0.02,
    padding: windowWidth * 0.02,
    borderRadius: windowHeight * 0.01,
  },
  userInfo: {
    fontSize: windowHeight * 0.02,
    fontWeight: "bold",
  },
  userInfoDescription: {
    fontSize: windowHeight * 0.018,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: windowHeight * 0.03,
  },
  button: {
    backgroundColor: "#F2E8CF",
    flex: 1,
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.05,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: windowHeight * 0.017,
    alignItems: "center", // Aligner le contenu au centre
    justifyContent: "center", // Aligner le contenu au centre
  },
  smallerButton: {
    flex: 0.5, // Utilisez un flex plus petit pour le bouton "Appeler"
  },
  buttonText: {
    textAlign: "center",
    fontSize: windowHeight * 0.02,
    fontWeight: "bold",
  },
});
