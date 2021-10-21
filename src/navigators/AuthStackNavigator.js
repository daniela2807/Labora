import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen } from '../screens/LoginScreen'
import {RegistrationScreen} from '../screens/RegistrationScreen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
    mode={'modal'}
    screenOptions={{
        headerShown:false,
      }}>
      <AuthStack.Screen name={"LoginStack"}>
          {
              () => (
                  <LoginStack.Navigator
                  mode={'card'}
                  screenOptions={{headerShown:false}}>
                      <LoginStack.Screen  name={'Login'} component={LoginScreen}/>
                  </LoginStack.Navigator>
              )
          }
      </AuthStack.Screen>
      <AuthStack.Screen name={"Registro"} component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
