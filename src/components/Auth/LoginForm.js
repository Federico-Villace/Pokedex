import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Formulario enviado...");
      console.log(formValue);
    },
  });

  return (
    <ImageBackground
      source={require("../../assets/Pikachu_XY.png")}
      style={{
        width: "100%",
        height: "110%",
        opacity: 0.87,
      }}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor={"black"}
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <Text style={styles.error}>{formik.errors.username} </Text>
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor={"black"}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <Text style={styles.error} backgroundColor={() => changeColor()}>
          {formik.errors.password}
        </Text>
        <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
          <Text style={styles.text}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

function changeColor() {
  return {
    backgroundColor: "#DDDDDD",
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#DDDDDD",
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#DDDDDD",
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#ccfff5",
  },
  spaceBAButton: {
    width: "25%",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
  },
  error: {
    justifyContent: "flex-start",
    marginLeft: 15,
    color: "#f00",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export { LoginForm };
