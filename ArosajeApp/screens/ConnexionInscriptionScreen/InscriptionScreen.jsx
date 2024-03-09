import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from "react";
import global from '../../global';

//Page d'inscription à changer de place
export function InscriptionScreen() {
  const navigation = useNavigation();

  // États pour les champs de saisie
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [cp, setCp] = useState("");
  const [rue, setRue] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInscriptionValider = () => {
    // Construction du corps de la requête à envoyer à l'API
    const requestBody = {
      email: email,
      motDePasse: password,
      prenom: prenom,
      nom: nom,
      ville: ville,
      cp: cp,
      rue: rue,
    };

    // Envoi de la requête à votre API
    fetch("http://localhost:3000/api/utilisateurs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          const requestBodyLog = {
            email: email,
            motDePasse: password,
          };
          // Envoi de la requête à votre API
          fetch("http://localhost:3000/api/token/auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBodyLog),
          })
            .then((response) => {
              if (response.ok) {
                // La connexion est réussie, redirige l'utilisateur vers une autre page
                response.json().then((data) => {
                  global.token = data.token; // Stocke le token dans le state ou dans un contexte global
                });
                navigation.navigate("AccueilScreen");
              }
            });
        } else {
          console.log(response);
          // Gére les cas d'échec de connexion
          setErrorMessage("Informations d'inscription invalides."); // Affiche un message d'erreur à l'utilisateur

        }
      })
      .catch((error) => {
        setErrorMessage("Erreur lors de la tentative de connexion :", error);
        // Affiche un message d'erreur à l'utilisateur
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <ChevronLeft color="black" size={30} />
        </TouchableOpacity>
        <Text style={styles.text}>Inscription</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Champ de saisie pour le nom */}
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={nom}
          onChangeText={setNom}
        />
        {/* Champ de saisie pour le prénom */}
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={prenom}
          onChangeText={setPrenom}
        />
        {/* Champ de saisie pour l'email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {/* Champ de saisie pour la ville */}
        <TextInput
          style={styles.input}
          placeholder="Ville"
          value={ville}
          onChangeText={setVille}
        />

        {/* Champ de saisie pour le code postal */}
        <TextInput
          style={styles.input}
          placeholder="Code Postal"
          value={cp}
          onChangeText={setCp}
        />

        {/* Champ de saisie pour la Rue*/}
        <TextInput
          style={styles.input}
          placeholder="Rue"
          value={rue}
          onChangeText={setRue}
        />

        {/* Champ de saisie pour le mot de passe */}
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleInscriptionValider}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: windowHeight * 0.05,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.04, 
  },
  image: {
    marginBottom: windowHeight * 0.04, 
  },
  text: {
    fontSize: windowWidth * 0.08, 
    marginLeft: windowWidth * 0.02, 
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: windowWidth * 0.05, 
  },
  input: {
    height: windowHeight * 0.1, 
    fontSize: windowWidth * 0.04, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: windowWidth * 0.04, 
    marginBottom: windowHeight * 0.02, 
    paddingHorizontal: windowWidth * 0.02, 
  },
  button: {
    width: windowWidth * 0.9,
    padding: windowHeight * 0.03, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.02, 
    marginBottom: windowHeight * 0.02, 
    borderRadius: windowWidth * 0.04, 
    backgroundColor: '#F2E8CF',
  },
  buttonText: {
    color: '#000000',
    fontSize: windowWidth * 0.05, 
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupTextPart1: {
    fontSize: windowWidth * 0.05, 
    textAlign: 'center',
    marginTop: windowHeight * 0.01, 
  },
  signupTextPart2: {
    fontSize: windowWidth * 0.05, 
    color: "#386641",
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: windowHeight * 0.01, 
  },
});

export default styles;