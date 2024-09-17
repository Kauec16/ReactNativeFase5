import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import { StyleSheet } from 'react-native-web';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#B2D8B2" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
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
