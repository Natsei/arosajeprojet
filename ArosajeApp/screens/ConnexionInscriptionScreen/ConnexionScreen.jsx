import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import global from '../../global';

//Page de connexion
export function ConnexionScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleConnecterValider = () => {
    // Construction du corps de la requête à envoyer à l'API
    const requestBody = {
      email: email,
      motDePasse: password,
    };

    // Envoi de la requête à notre API
    fetch("http://localhost:3000/api/token/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          // La connexion est réussie, redirige l'utilisateur vers une autre page
          response.json().then((data) => {
            global.token = data.token;
            global.userId = data.id; // Stocke le token dans le state ou dans un contexte global
          });
          navigation.navigate("AccueilScreen");
        } else {
          console.log(response);
          // Gére les cas d'échec de connexion
          setErrorMessage("Informations d'identification incorrectes."); // Affiche un message d'erreur à l'utilisateur

        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la tentative de connexion :", error);
        // Affiche un message d'erreur à l'utilisateur
      });
  };

  //États pour les champs de saisie
  /*const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleConnecterValider = () => {
     //Naviguer vers l'écran ConnexionScreen avec les données saisies
    //navigation.navigate('Connexion', { email, password });
    navigation.navigate('DetailScreen');
  };*/

  const handleInscription = () => {
    navigation.navigate("InscriptionScreen"); // Rediriger vers la page Inscription
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <ChevronLeft color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Connexion</Text>
      </View>
      <Image
        source={require("../../assets/Connexion/flowerPot.png")}
        style={styles.image}
      />
      {errorMessage ? (
          <Text>{errorMessage}</Text>
        ) : null}
      <View style={styles.buttonContainer}>
        {/* Champ de saisie pour l'email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        {/* Champ de saisie pour le mot de passe */}
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleConnecterValider}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupTextPart1}>Pas de compte ? </Text>
          <TouchableOpacity onPress={handleInscription}>
            <Text style={styles.signupTextPart2}>Je m'inscris</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: windowHeight * 0.05,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: windowHeight * 0.04,
  },
  image: {
    marginBottom: windowHeight * 0.04,
  },
  text: {
    fontSize: windowWidth * 0.07,
    marginLeft: windowWidth * 0.02,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
  },
  input: {
    height: windowHeight * 0.1,
    fontSize: windowWidth * 0.04,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: windowWidth * 0.04,
    marginBottom: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.02,
  },
  button: {
    width: windowWidth * 0.9,
    padding: windowHeight * 0.03,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.02,
    borderRadius: windowWidth * 0.04,
    backgroundColor: "#F2E8CF",
  },
  buttonText: {
    color: "#000000",
    fontSize: windowWidth * 0.05,
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupTextPart1: {
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    marginTop: windowHeight * 0.01,
  },
  signupTextPart2: {
    fontSize: windowWidth * 0.05,
    color: "#386641",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: windowHeight * 0.01,
  },
});

export default styles;
