import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

export function PlantScreen() {
  const navigation = useNavigation();

  // États pour les champs de saisie
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleConnecterValider = () => {
    // Naviguer vers l'écran ConnexionScreen avec les données saisies
    //navigation.navigate('Connexion', { email, password });
  };

  const handleInscription = () => {
    console.log("gg");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChevronLeft color="black" size={30} />
        <Text style={styles.text}>Connexion</Text>
      </View>
      <Image
        source={require('../../assets/Connexion/flowerPot.png')}
        style={styles.image}
      />
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

        <TouchableOpacity style={styles.button} onPress={handleConnecterValider}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: "#FFFFFF",
  },  
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    marginBottom: 40,
  },  
  text: {
    fontSize: 40, 
    marginLeft: 10, // Ajustez la marge pour l'espacement entre le chevron et le texte
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: 350,
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#F2E8CF',
  },
  buttonText: {
    color: '#000000',
    fontSize: 25,
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupTextPart1: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  signupTextPart2: {
    fontSize: 25,
    color: "#386641",
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
