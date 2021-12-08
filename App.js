import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
