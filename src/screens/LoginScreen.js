import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';
import {Error} from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';

export function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login</Heading>
      <Error error={''}/>
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'} value={email} onChangeText={setEmail}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry value={password} onChangeText={setPassword}/>
      <FilledButton title={'Login'} style={styles.loginButton} onPress={() =>{ login();} }/>
      <TextButton title={'Registrarte'} onPress={() => { {navigation.navigate('Registro')}}}/>
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
  }
});
