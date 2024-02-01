import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export function MapScreen() {
  const navigation = useNavigation();

  const handleInscription = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.6109, // Latitude de Montpellier
          longitude: 3.8772, // Longitude de Montpellier
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ latitude: 43.6109, longitude: 3.8772 }}
          title="Montpellier"
          //Ajouter le reste des infos de l'API
          description="Ville située dans le sud de la France"
        />
      </MapView>

      <Text>Map</Text>
      <TouchableOpacity onPress={handleInscription}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '60%', // Ajustez la hauteur de la carte selon vos besoins
  },
});
