import React from "react";
import { View, StyleSheet, StatusBar, Image, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MdpScreen } from "./MdpScreen";
import { TabScreen } from "./TabScreen";
import useSWR from "swr";
import global from "../../global";

const Tab = createMaterialTopTabNavigator();

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then(
    (res) => res.json()
  );

export function ProfileScreen() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/utilisateurs/getById?id=" + global.userId,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Text style={styles.title}>Profil</Text>
    
      <View style={styles.tabContainer}>
        <Tab.Navigator
          tabBarPosition="top"
          tabBarOptions={{
            // Couleur du texte de l'onglet actif
            tabStyle: { marginTop: 10 },
            indicatorStyle: { backgroundColor: "#F2E8CF" }, // Changer la couleur de la barre ici
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
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  tabContainer: {
    flex: 1,
  },
});

export default ProfileScreen;
