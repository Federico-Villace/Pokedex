import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { POKEMON_TYPE_COLORS } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard(props) {
  const { pokemon } = props;
  console.log(pokemon);
  const navigation = useNavigation();
  const bgStyles = {
    backgroundColor: POKEMON_TYPE_COLORS[pokemon.type],
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
    console.log("Pokemon ->", pokemon);
  };
  //El view es como un div
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 20,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

export { PokemonCard };
