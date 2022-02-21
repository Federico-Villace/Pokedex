import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { capitalize } from "lodash";
import React from "react";
import { POKEMON_TYPE_COLORS } from "../../utils/constants";
import { getPokemonDetailsByUrlApi } from "../../api/pokemon";

export default function Header(props) {
  const { name, type, image, order } = props;

  const bgStyles = {
    backgroundColor: POKEMON_TYPE_COLORS[type],
    ...styles.bg,
  };

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 410,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  contentImg: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 55,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export { Header };
