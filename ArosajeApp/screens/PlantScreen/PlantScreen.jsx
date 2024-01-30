import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function PlantScreen({ navigation }) {

  const handleInscription = () => {
    navigation.navigate('ChatScreen'); // Rediriger vers la page Inscription
  };

  return (
    <View style={styles.container}>
      <Text>Plantes</Text>
      <TouchableOpacity onPress={handleInscription}>
        <Text>Je m'inscris</Text>
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
});
