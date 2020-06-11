import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>I'm learning React Native!!</Text>
        <Text style={styles.boldText}>I'm learning React Native!!</Text>
        <Text style={styles.boldText}>I'm learning React Native!!</Text>
      </View>
    </View>
  );
}

// React Native's way of CSS styling
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'pink',
    padding: 20,
  },

  boldText: {
    fontWeight: 'bold'
  },

  body: {
    backgroundColor: 'yellow',
    padding: 20,
    fontWeight: 'bold'
  }
});

export default App;