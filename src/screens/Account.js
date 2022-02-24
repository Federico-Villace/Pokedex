import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";

export default function Account() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}

export { Account };
