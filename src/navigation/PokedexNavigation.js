import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokedex } from "../screens/Pokedex";
import { Pokemon } from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        component={Pokedex}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export { PokedexNavigation };
