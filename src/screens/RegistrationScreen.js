import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';
import {Error} from '../components/Error';
import { Ionicons } from '@expo/vector-icons';

export function RegistrationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registrar</Heading>
      <Ionicons name="close-circle-outline" size={32} color="purple" style={styles.closeIcon} onPress= {()=> {
        navigation.pop();
      }} />
      <Error error={''}/>
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry/>
      <FilledButton title={'Registrar'} style={styles.loginButton} onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  title :{
    marginBottom: 48,

  },

  input:{
      marginVertical: 8,
  },

  loginButton: {
      marginVertical : 32,
  },
  closeIcon:{
    position:'absolute',
    top:60,
    right:16
  }
});
