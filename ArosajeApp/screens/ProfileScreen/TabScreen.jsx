import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function TabScreen() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSave = () => {
    console.log('Informations enregistrées :', { name, surname, email, city });
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
    padding: windowWidth * 0.05, // 5% of the window width
  },
  infoContainer: {
    width: '100%',
  },
  infoBox: {
    marginBottom: windowHeight * 0.010, // 5% of the window height
  },
  label: {
    fontSize: windowWidth * 0.045, // 2.5% of the window width
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.01, // 1% of the window height
  },
  input: {
    height: windowHeight * 0.05, // 8% of the window height
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: windowWidth * 0.030, // 1% of the window width
    paddingLeft: windowWidth * 0.02, // 2% of the window width
    marginBottom: windowHeight * 0.01, // 2% of the window height
  },
  saveButton: {
    backgroundColor: '#F2E8CF',
    paddingVertical: windowHeight * 0.02, // 3% of the window height
    paddingHorizontal: windowWidth * 0.04, // 5% of the window width
    borderRadius: windowWidth * 0.045, // 1% of the window width
    marginTop: windowHeight * 0.05, // 5% of the window height
  },
  buttonText: {
    fontSize: windowWidth * 0.06, // 2% of the window width
    color: '#000000',
    textAlign: 'center',
  },
});

export default TabScreen;
