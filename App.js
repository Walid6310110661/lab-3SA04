import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';
import { StatusBar } from 'expo-status-bar';
import  Constants  from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
    </View>
 );
}


const styles = StyleSheet.create({
  container: {
    paddingToo: Constants.StatusBarHeight
  },
});
