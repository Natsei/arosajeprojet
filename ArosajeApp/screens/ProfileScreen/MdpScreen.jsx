import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as style from '../../style/styles';// Importez vos styles

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function MdpScreen() {
  const navigation = useNavigation(); // Utilisez useNavigation à l'intérieur de la fonction

  const [Mdp, setMdp] = useState('');
  const [NewMdp, setNewMdp] = useState('');
  const [ChangeMdp, setChangeMdp] = useState('');

  // const handleSave = () => {
  //   console.log('Informations enregistrées :', { Mdp, NewMdp, ChangeMdp });
  // };

  const handleSave = () => {
    navigation.navigate('DetailScreen');
    //console.log('Informations enregistrées :', { name, surname, email, city });
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
    borderRadius: style.BORDER_SIZE.border,
  },
  infoBox: {
    marginBottom: windowHeight * 0.015, 
  },
  label: {
    fontSize: windowWidth * 0.045, 
    fontWeight: style.FONT_WEIGHTS.bold,
    marginBottom: windowHeight * 0.01, 
  },
  input: {
    ...style.BUTTONS.form_style,
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

export default MdpScreen;
