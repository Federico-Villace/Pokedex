import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import { POKEMON_TYPE_COLORS } from "../../utils/constants";

export default function Type(props) {
  console.log("hola", props);
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: POKEMON_TYPE_COLORS[item.type.name],
          }}
        >
          {console.log(item.type)}
          <Text style={styles.text}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export { Type };
