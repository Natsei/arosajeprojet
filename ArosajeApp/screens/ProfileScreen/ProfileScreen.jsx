import React from 'react';
import { View, StyleSheet, StatusBar, Image, Text, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as style from '../../style/styles';// Importez vos styles
import { MdpScreen } from './MdpScreen';
import { TabScreen } from './TabScreen';

const Tab = createMaterialTopTabNavigator();

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Text style={styles.title}>Profil</Text>
      <Image
        source={require('../../assets/Profile/Image.png')}
        style={styles.profileImage}
      />
      <View style={styles.tabContainer}>
      <Tab.Navigator
        tabBarPosition="top"
        screenOptions={{ // Couleur du texte de l'onglet actif
          tabStyle: { marginTop: 10 },
          indicatorStyle: { backgroundColor: style.COLORS.button }, // Changer la couleur de la barre ici
        }}
      >
          <Tab.Screen name="Informations" component={TabScreen} />
          <Tab.Screen name="MdpScreen" component={MdpScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: style.COLORS.primary,
  },
  title: {
    fontSize: 12,
    fontWeight: style.FONT_WEIGHTS.bold,
    marginTop: 20,
    alignSelf: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: style.BORDER_SIZE.border,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  tabContainer: {
    flex: 1,
  },
});

export default ProfileScreen;
