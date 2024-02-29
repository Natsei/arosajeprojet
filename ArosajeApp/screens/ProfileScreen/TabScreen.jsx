import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from '../../style/styles';// Importez vos styles

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function TabScreen() {
  const navigation = useNavigation(); // Utilisez useNavigation à l'intérieur de la fonction

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSave = () => {
    navigation.navigate('MapScreen');
    //console.log('Informations enregistrées :', { name, surname, email, city });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <InfoBox label="Nom" value={name} onChangeText={setName} />
        <InfoBox label="Prénom" value={surname} onChangeText={setSurname} />
        <InfoBox label="Email" value={email} onChangeText={setEmail} />
        <InfoBox label="Ville" value={city} onChangeText={setCity} />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: windowWidth * 0.05, 
  },
  infoContainer: {
    width: '100%',
  },
  infoBox: {
    marginBottom: windowHeight * 0.010, 
  },
  label: {
    fontSize: windowWidth * 0.045, 
    fontWeight: style.FONT_WEIGHTS.bold, 
  },
  input: {
    height: windowHeight * 0.05, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: style.BORDER_SIZE.border, 
    paddingLeft: windowWidth * 0.02,
    marginBottom: windowHeight * 0.01,
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
    color: '#000000',
    textAlign: 'center',
  },
});

export default TabScreen;
