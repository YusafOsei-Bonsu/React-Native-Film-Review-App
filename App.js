import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  // The state is 'name' and 'setName' is our setState method for 'name'
  const [name, setName] = useState("Yusaf");
  const [age, setAge] = useState("24");

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="e.g. John Doe"  
        onChangeText={(val) => setName(val)}/>
      <Text>Enter age:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="e.g. 50"  
        onChangeText={(val) => setAge(val)}/>
      <Text>name: {name}, age: {age}</Text>
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

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }

});

export default App;