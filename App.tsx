import 'react-native-gesture-handler'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './screens/components/LoginForm';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Crack3!</Text>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
