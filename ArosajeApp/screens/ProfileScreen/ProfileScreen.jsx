import React from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
          screenOptions={{
            tabBarItemStyle: {
              marginTop: 10,
            },
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1,
  },
});

export default ProfileScreen;
