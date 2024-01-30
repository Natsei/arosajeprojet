import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const AddPictureScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
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
      <Text style={styles.text}>Bienvenue sur l'application</Text>
      <TouchableOpacity style={styles.button} onPress={handleImagePick}>
        <Text style={styles.buttonText}>Choisir une image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
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
