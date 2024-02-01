import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

//Page d'inscription à changer de place
export function InscriptionScreen() {
  const navigation = useNavigation();

  // États pour les champs de saisie
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [ville, setVille] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleConnecterValider = () => {
    // Naviguer vers l'écran ConnexionScreen avec les données saisies
    navigation.navigate('Connexion', { email, password, nom, prenom, ville });
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

        {/* Champ de saisie pour le mot de passe */}
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleConnecterValider}>
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