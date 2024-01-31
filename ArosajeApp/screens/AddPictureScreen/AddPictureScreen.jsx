import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select';

const AddPictureScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedValue, setSelectedValue] = useState('plante'); // État pour stocker la plante sélectionnée

  const handleImagePick = () => {
    const options = {
      title: 'Choisir une image',
      cancelButtonTitle: 'Annuler',
      takePhotoButtonTitle: 'Prendre une photo',
      chooseFromLibraryButtonTitle: 'Choisir depuis la galerie',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé la sélection de l'image");
      } else if (response.error) {
        console.log("Erreur: ", response.error);
      } else {
        console.log("Image sélectionnée: ", response.uri);
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Glissez et déposez une image ici</Text>
        )}
      </View>

      <Text>Sélectionnez une option :</Text>
      <RNPickerSelect
  style={{
    inputIOS: {
      height: '10%',
      width: '80%',
      marginBottom: 20,
      borderColor: 'gray',
      borderWidth: 1,
    },
  }}
  value={selectedValue}
  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  items={[
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'js' },
    { label: 'Python', value: 'python' },
    { label: 'C#', value: 'csharp' },
  ]}
/>
      <Text>Option sélectionnée : {selectedValue}</Text>

      <TextInput
        style={styles.descriptionInput}
        placeholder="Entrez la description ici"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      <Text style={styles.text}>Bienvenue sur l'application</Text>

      <TouchableOpacity style={styles.button} onPress={handleImagePick}>
        <Text style={styles.buttonText}>Choisir une image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '80%', // Utilisation de pourcentage au lieu d'une valeur fixe
    height: '30%', // Utilisation de pourcentage au lieu d'une valeur fixe
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  placeholderText: {
    textAlign: 'center',
    color: '#888',
  },
  descriptionInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
    marginTop: 10,
    height: '20%', // Utilisation de pourcentage au lieu d'une valeur fixe
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F2E8CF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});

export { AddPictureScreen };
