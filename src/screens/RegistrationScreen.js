import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, CheckBox  } from "react-native";
import { FilledButton } from "../components/FilledButton";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { TextButton } from "../components/TextButton";
import { Error } from "../components/Error";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/AuthContext";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

export function RegistrationScreen({ navigation }) {
  const { register } = React.useContext(AuthContext);
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [isSelected, setSelection] = React.useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registrar</Heading>
      <Ionicons
        name="close-circle-outline"
        size={32}
        color="purple"
        style={styles.closeIcon}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Nombre"}
        value={nombre}
        onChangeText={setNombre}
      />
      <Picker
        selectedValue={ciudad}
        onValueChange={(value, index) => setCiudad(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Aguascalientes" value="Aguascalientes" />
        <Picker.Item label="Baja California" value="Baja California" />
        <Picker.Item label="Baja California Sur" value="Baja California Sur" />
        <Picker.Item label="Campeche" value="Campeche" />
        <Picker.Item label="Coahuila de Zaragoza" value="Coahuila de Zaragoza" />
        <Picker.Item label="Colima" value="Colima" />
        <Picker.Item label="Chiapas" value="Chiapas" />
        <Picker.Item label="Chihuahua" value="Chihuahua" />
        <Picker.Item label="Distrito Federal" value="Distrito Federal" />
        <Picker.Item label="Durango" value="Durango" />
        <Picker.Item label="Guanajuato" value="Guanajuato" />
        <Picker.Item label="Guerrero" value="Guerrero" />
        <Picker.Item label="Hidalgo" value="Hidalgo" />
        <Picker.Item label="Jalisco" value="Jalisco" />
        <Picker.Item label="México" value="México" />
        <Picker.Item label="Michoacán de Ocampo" value="Michoacán de Ocampo" />
        <Picker.Item label="Morelos" value="Morelos" />
        <Picker.Item label="Nayarit" value="Nayarit" />
        <Picker.Item label="Nuevo León" value="Nuevo León" />
        <Picker.Item label="Oaxaca" value="Oaxaca" />
        <Picker.Item label="Puebla" value="Puebla" />
        <Picker.Item label="Querétaro" value="Querétaro" />
        <Picker.Item label="Quintana Roo" value="Quintana Roo" />
        <Picker.Item label="San Luis Potosí" value="San Luis Potosí" />
        <Picker.Item label="Sinaloa" value="Sinaloa" />
        <Picker.Item label="Sonora" value="Sonora" />
        <Picker.Item label="Tabasco" value="Tabasco" />
        <Picker.Item label="Tamaulipas" value="Tamaulipas" />
        <Picker.Item label="Tlaxcala" value="Tlaxcala" />
        <Picker.Item label="Veracruz de Ignacio de la Llave" value="Veracruz de Ignacio de la Llave" />
        <Picker.Item label="Yucatán" value="Yucatán" />
        <Picker.Item label="Zacatecas" value="Zacatecas" />


      </Picker>
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop:10 }}>
        <Button title="Comprueba tu identidad" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{marginTop:15}}>Aceptar terminos y condiciones</Text>
      </View>
      <FilledButton
        title={"Registrar"}
        style={styles.loginButton}
        onPress={() => {
          register(email, password);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  checkboxContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },

  loginButton: {
    marginVertical: 32,
  },

  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },
  checkbox: {
    alignSelf: "center",
  },

  picker: {
    width:'100%',
    marginVertical: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
