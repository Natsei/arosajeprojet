import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function MdpScreen() {
  const [Mdp, setMdp] = useState('');
  const [NewMdp, setNewMdp] = useState('');
  const [ChangeMdp, setChangeMdp] = useState('');

  const handleSave = () => {
    console.log('Informations enregistrées :', { Mdp, NewMdp, ChangeMdp });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <InfoBox label="Mot de Passe" value={Mdp} onChangeText={setMdp} />
        <InfoBox label="Nouveau Mot de Passe" value={NewMdp} onChangeText={setNewMdp} />
        <InfoBox label="Confirmation Mot de Passe" value={ChangeMdp} onChangeText={setChangeMdp} />
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
    borderRadius: 10,
  },
  infoBox: {
    marginBottom: windowHeight * 0.015, 
  },
  label: {
    fontSize: windowWidth * 0.045, 
    fontWeight: 'bold',
    marginBottom: windowHeight * 0.01, 
  },
  input: {
    height: windowHeight * 0.06, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: windowWidth * 0.030, 
    paddingLeft: windowWidth * 0.02, 
    marginBottom: windowHeight * 0.01, 
  },
  saveButton: {
    backgroundColor: '#F2E8CF',
    paddingVertical: windowHeight * 0.03, 
    paddingHorizontal: windowWidth * 0.05, 
    borderRadius: windowWidth * 0.045,
    marginTop: windowHeight * 0.02, 
  },
  buttonText: {
    fontSize: windowWidth * 0.06, 
    color: '#000000',
    textAlign: 'center',
  },
});

export default MdpScreen;
