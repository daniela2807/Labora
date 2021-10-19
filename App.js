import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {LoginScreen} from './src/screens/LoginScreen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./src/navigators/AuthStackNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
