import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
//https://www.onlinewebfonts.com/download/061b39e95e1a0bd25e8d294af8596b2a link de iconos FontAwesome5Regular
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AccountScreen"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
          headerTitle: "Mi cuenta",
          headerTitleAlign: "center",
          headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          headerTitleAlign: "center",
          headerShown: false,
          headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
          headerBackground: () => (
            <BlurView
              tint="light"
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 85,
        height: 85,
        top: -13,
      }}
    />
  );
}

export { Navigation };
