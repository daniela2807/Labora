import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import { AuthContext } from "./src/contexts/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {

  const auth= React.useMemo( () => ({
    login: (email,password) => {
      console.log('login',email,password)
    },
    logout:() => {
      console.log('logout')
    },
    register:(email,password) => {
      console.log('register',email,password)
    }
  }),
  [],);

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={"AuthStack"} component={AuthStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
