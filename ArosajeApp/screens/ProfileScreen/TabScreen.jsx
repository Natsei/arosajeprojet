import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as style from "../../style/styles"; // Importez vos styles
import useSWR from "swr";
import global from "../../global";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then(
    (res) => res.json()
  );

export function TabScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [cp, setCp] = useState("");
  const [rue, setRue] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/utilisateurs/getById?id=" + global.userId,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const handleSave = () => {
    // Construction du corps de la requête à envoyer à l'API
    const requestBody = {
      email: email,
      prenom: surname,
      nom: name,
      ville: city,
      cp: cp,
      rue: rue,
      description: description,
    };

    // Envoi de la requête à notre API
    fetch(
      "http://localhost:3000/api/utilisateurs/update?utilisateurId=" + global.userId,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${global.token}`, // Ajoutez le token ici
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("modifié");
        } else {
          // Gére les cas d'échec de connexion
          setErrorMessage("Information non modifés."); // Affiche un message d'erreur à l'utilisateur
        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la tentative de modification :", error);
        // Affiche un message d'erreur à l'utilisateur
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.infoContainer}>
          <InfoBox label="Nom" value={data.nom} onChangeText={setName} />
          <InfoBox label="Prénom" value={data.prenom} onChangeText={setSurname}/>
          <InfoBox label="Email" value={data.email} onChangeText={setEmail} />
          <InfoBox label="Ville" value={data.ville} onChangeText={setCity} />
          <InfoBox label="Code postal" value={data.cp} onChangeText={setCp} />
          <InfoBox label="Rue" value={data.rue} onChangeText={setRue} />
          <InfoBox label="Description" value={data.description} onChangeText={setDescription}/>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const InfoBox = ({ label, value, onChangeText }) => (
  <View style={styles.infoBox}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Entrez votre ${label.toLowerCase()}`}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.COLORS.background,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: windowWidth * 0.05,
  },
  scrollViewStyle: {
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    paddingVertical: windowHeight * 0.02,
  },
  infoBox: {
    marginBottom: windowHeight * 0.01,
  },
  label: {
    fontSize: windowWidth * 0.045,
    fontWeight: style.FONT_WEIGHTS.bold,
  },
  input: {
      fontWeight: style.FONT_WEIGHTS.bold,
      color: style.COLORS.text,
      width: windowWidth * 0.9,   
      padding: windowHeight * 0.007,   
      borderRadius: style.BORDER_SIZE.border,    
      backgroundColor: style.COLORS.primary,
      borderColor: 'gray',
      borderWidth: 0.6,
  },
  saveButton: {
    backgroundColor: style.COLORS.button,
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: style.BORDER_SIZE.border,
    marginTop: windowHeight * 0.02,
  },
  buttonText: {
    fontSize: windowWidth * 0.06,
    color: "#000000",
    textAlign: "center",
  },
  plantScrollView: {
    flex: 1.5,
    marginTop: windowWidth * 0.02,
  },
});

export default TabScreen;
