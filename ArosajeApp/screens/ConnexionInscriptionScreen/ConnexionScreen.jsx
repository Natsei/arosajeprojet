import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import * as style from '../../style/styles';// Importez vos styles

//Page de connexion
export function ConnexionScreen() {
  const navigation = useNavigation();

   //États pour les champs de saisie
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleConnecterValider = () => {
     //Naviguer vers l'écran ConnexionScreen avec les données saisies
    //navigation.navigate('Connexion', { email, password });
    navigation.navigate('DetailScreen');
  };
  
  const handleInscription = () => {
    navigation.navigate('InscriptionScreen'); // Rediriger vers la page Inscription
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <ChevronLeft color="black" size={30} />
        </TouchableOpacity>
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
    fontSize: windowWidth * 0.07,    
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
    borderRadius: style.BORDER_SIZE.border,    
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
    borderRadius: style.BORDER_SIZE.border,    
    backgroundColor: style.COLORS.button,
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
