import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as style from "../../style/styles";
import useSWR from "swr";
import global from "../../global";
import { visitParameterList } from "typescript";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const fetcher = (url) =>
  fetch(url, { headers: { Authorization: "Bearer " + global.token } }).then(
    (res) => res.json()
  );

export function AccueilScreen() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const requestAnnonce = useSWR(
    "http://localhost:3000/api/annonces/getAll",
    fetcher
  );

  const requestCategorie = useSWR(
    "http://localhost:3000/api/categories/getAll",
    fetcher
  );

  const requestUser = useSWR(
    "http://localhost:3000/api/utilisateurs/getById?id=" + global.userId,
    fetcher
  );

  const getAnnonce = (idCategorie) => {
    if (!idCategorie || idCategorie === 0) {
      return useSWR(
        "http://localhost:3000/api/annonces/getAll",
        fetcher
      );
    } else {
      return useSWR(
        "http://localhost:3000/api/annonces/getAll?categorie=" + idCategorie,
        fetcher
      );
    }
  };

  const handleAddPicturePress = () => {
    navigation.navigate("AddPictureScreen");
  };

  const handleCategoryPress = (idCategorie) => {
    //console.log(`Navigating to ${category} page`);
    setSelectedCategory(idCategorie === selectedCategory ? null : idCategorie);
    /* if (idCategorie === 0) {
      setAnnonce(useSWR(
        "http://localhost:3000/api/annonces/getAll",
        fetcher
      ));
    } else {
      setAnnonce(useSWR(
        "http://localhost:3000/api/annonces/getAll?categorie=" + idCategorie,
        fetcher
      ));
    } */
  };

  const handlePlantPress = (plantId) => {
    navigation.navigate("DetailScreen", { id: plantId });
  };

  const handleProfile = () => {
    navigation.navigate("ProfileScreen");
  };

  console.log(getAnnonce(selectedCategory).data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.villeText}>Ville: </Text>
          <Text style={styles.villeText}>{requestUser.data?.ville}</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity
            onPress={handleAddPicturePress}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfile}>
            <Image
              source={{
                uri:
                  "http://localhost:3000/img/uploads/" +
                  requestUser.data?.cheminPhoto,
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBarTop}>
        <SearchBar
          placeholder="Rechercher des plantes"
          // onChangeText={(text) => setSearchText(text)}
          // value={searchText}
          lightTheme
          round
          containerStyle={styles.searchBarTop}
          inputContainerStyle={styles.inputContainer}
        />
      </View>

      <Image
        source={require("../../assets/Plantes/picture_home.png")}
        style={styles.imageAboveCategories}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScrollView}
      >
        <View style={styles.categoryButtons}>
          <TouchableOpacity
            key="0"
            onPress={() => handleCategoryPress(0)}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  selectedCategory === 0
                    ? style.COLORS.button
                    : style.COLORS.primary,
                fontWeight:
                  selectedCategory === 0
                    ? style.FONT_WEIGHTS.bold
                    : style.FONT_WEIGHTS.normal,
              },
            ]}
          >
            <Text>Tous</Text>
          </TouchableOpacity>
          {requestCategorie.data?.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategoryPress(category.id)}
              style={[
                styles.categoryButton,
                {
                  backgroundColor:
                    selectedCategory === category.id
                      ? style.COLORS.button
                      : style.COLORS.primary,
                  fontWeight:
                    selectedCategory === category.id
                      ? style.FONT_WEIGHTS.bold
                      : style.FONT_WEIGHTS.normal,
                },
              ]}
            >
              <Text>{category.libelle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        style={styles.plantScrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.plantSection}>
          {getAnnonce(selectedCategory).data?.map((annonce) => (
            <TouchableOpacity
              key={annonce.id}
              onPress={() => handlePlantPress(annonce.id)}
              style={styles.plantItem}
            >
              <Image
                source={{
                  uri:
                    "http://localhost:3000/img/uploads/" +
                    annonce.lesPhotos?.cheminPhoto,
                }}
                style={styles.plantImage}
              />
              <Text style={styles.plantName}>{annonce.plante.libelle}</Text>
              <Text>{annonce.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
  },
  leftHeader: {
    flex: 1.5,
    marginLeft: windowWidth * -0.02,
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: windowWidth * -0.08,
  },
  villeText: {
    fontSize: windowWidth * 0.06,
    marginLeft: windowWidth * 0.02,
  },
  profileImage: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: style.BORDER_SIZE.border,
    marginRight: windowWidth * 0.03,
    marginTop: windowWidth * 0.01,
  },
  addButton: {
    backgroundColor: style.COLORS.button,
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: style.BORDER_SIZE.border,
    justifyContent: "center",
    alignItems: "center",
    marginRight: windowWidth * 0.03,
    marginTop: windowWidth * 0.01,
  },
  addButtonText: {
    color: "black",
    marginRight: windowWidth * -0.01,
    fontSize: windowWidth * 0.09,
    width: windowWidth * 0.05,
    fontWeight: style.FONT_WEIGHTS.bold,
  },
  searchBarTop: {
    marginBottom: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.05,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: style.COLORS.button,
  },
  imageAboveCategories: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.4,
    marginLeft: windowWidth * 0.05,
    marginBottom: windowWidth * 0.08,
    borderRadius: style.BORDER_SIZE.border,
  },
  categoryScrollView: {
    maxHeight: windowWidth * 0.1,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: windowWidth * 0.02,
  },
  categoryButton: {
    padding: windowWidth * 0.02,
    borderRadius: style.BORDER_SIZE.border,
    marginRight: windowWidth * 0.02,
  },
  plantSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.025,
    marginBottom: windowWidth * 0.03,
  },
  plantItem: {
    alignItems: "center",
    width: "48%",
    marginBottom: windowWidth * 0.03,
    borderWidth: 1,
    borderColor: style.COLORS.primary,
    backgroundColor: style.COLORS.primary,
    borderRadius: style.BORDER_SIZE.border,
    padding: windowWidth * 0.02,
  },
  plantImage: {
    width: "100%",
    height: (windowWidth - windowWidth * 0.09) / 2.5,
    borderRadius: style.BORDER_SIZE.border,
    marginBottom: windowWidth * 0.02,
  },
  plantName: {
    fontSize: windowWidth * 0.05,
    fontWeight: style.FONT_WEIGHTS.bold,
  },
  plantScrollView: {
    flex: 1.5,
    marginTop: windowWidth * 0.02,
  },
});

export default AccueilScreen;
