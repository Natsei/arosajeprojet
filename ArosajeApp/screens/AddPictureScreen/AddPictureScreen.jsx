import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { TEXT_STYLES, COLORS, FONT_WEIGHTS } from '../../style/styles';// Importez vos styles
// import { RNCamera } from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';

const AddPictureScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedValue, setSelectedValue] = useState('plante');
  const [modalVisible, setModalVisible] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // const handleImagePick = () => {
  //   try {
  //     const options = {
  //       title: 'Choisir une image',
  //       cancelButtonTitle: 'Annuler',
  //       takePhotoButtonTitle: 'Prendre une photo',
  //       chooseFromLibraryButtonTitle: 'Choisir depuis la galerie',
  //       mediaType: 'photo',
  //       storageOptions: {
  //         skipBackup: true,
  //       },
  //     };
  
  //     ImagePicker.launchImageLibrary(options, (response) => {
  //       if (response.didCancel) {
  //         console.log("L'utilisateur a annulé la sélection de l'image");
  //       } else if (response.error) {
  //         console.log("Erreur: ", response.error);
  //       } else {
  //         console.log("Image sélectionnée: ", response.uri);
  //         setSelectedImage(response.uri);
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Erreur lors de la sélection de l'image : ", error);
  //   }
  // };

  // const handleOptionSelect = (option) => {
  //   setSelectedValue(option.label);
  //   setModalVisible(false);
  // };

  // const onCameraCapture = async (data) => {
  //   try {
  //     // Vous pouvez manipuler les données de l'image capturée ici, par exemple, l'enregistrer dans le stockage.
  //     console.log("Image capturée: ", data.uri);
  //     setSelectedImage(data.uri);
  //   } catch (error) {
  //     console.error("Erreur lors de la capture de l'image : ", error);
  //   } finally {
  //     setIsCameraOpen(false); // Fermer la caméra après la capture
  //   }
  // };

  // const options = [
  //   { label: 'Plante', value: 'plante' },
  //   { label: 'Java', value: 'java' },
  //   { label: 'JavaScript', value: 'js' },
  //   { label: 'Python', value: 'python' },
  //   { label: 'C#', value: 'csharp' },
  // ];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.dashedBorder}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          ) : (
            <Text style={styles.text}>Glissez et déposez une image ici</Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setIsCameraOpen(true)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text>Sélectionnez une option :</Text>
      <TouchableOpacity
        style={styles.selectStyle}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectTextStyle}>{selectedValue}</Text>
      </TouchableOpacity>

      {/* <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalOptionStyle}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.modalOptionTextStyle}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCancelStyle}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalOptionTextStyle}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}

      <TextInput
        style={styles.descriptionInput}
        placeholder="Entrez la description ici"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      {isCameraOpen && (
        <RNCamera
          style={styles.cameraPreview}
          captureAudio={false}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {}}
          onTextRecognized={({ textBlocks }) => {}}
          onPictureTaken={(data) => onCameraCapture(data)}
        />
      )}

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.buttonTextConfirm}>Enregistrer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '80%',
    height: '30%',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  dashedBorder: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'dashed',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    justifyContent: 'center',
  },
  selectStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '80%',
  },
  selectTextStyle: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'rgba(0, 0, 0, 0.2)', // Effet de bordure transparente
  },
  modalOptionStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 15,
  },
  modalCancelStyle: {
    backgroundColor: COLORS.button,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10, // Augmentez la taille du bouton
  },
  modalOptionTextStyle: {
    fontSize: 18,
  },
  descriptionInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
    marginTop: 10,
    height: '20%', 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    paddingTop: 10,
  },
  saveButton: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.button,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 2,
    marginBottom: 20, // Ajustement de la marge inférieure
  },
  cameraPreview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    height: 60,
    width: 60,
    backgroundColor: COLORS.button,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 48,
    fontWeight: FONT_WEIGHTS.bold,
  },
  buttonTextConfirm: {
    fontSize: 26, 
    color: '#000000',
    textAlign: 'center',
  },
});

export { AddPictureScreen };
