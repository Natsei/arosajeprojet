import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

export function AddPictureScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = () => {
    const options = {
      title: 'Choisir une image',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
      },
    };
  
    ImagePicker.launchImageLibrary(options, response => {
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
      <TapGestureHandler onHandlerStateChange={({ nativeEvent }) => nativeEvent.state === State.END && handleImagePick()}>
        <View style={styles.imageContainer}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          ) : (
            <Text style={styles.placeholderText}>Glissez et déposez une image ici</Text>
          )}
        </View>
      </TapGestureHandler>
      <Text style={styles.text}>Bienvenue sur l'application</Text>
      <TouchableOpacity style={styles.button} onPress={handleImagePick}>
        <Text style={styles.buttonText}>Sélectionner une image</Text>
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
    backgroundColor: '#eee',
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
