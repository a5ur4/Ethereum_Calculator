import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Title/>
        <Form/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    paddingTop: 80,
  },
});
