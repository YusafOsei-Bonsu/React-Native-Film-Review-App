import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  // The state is 'name' and 'setName' is our setState method for 'name'
  const [name, setName] = useState("Yusaf");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  // Changes the name upon btn press
  const clickHandler = () => { 
    setName('Jason Todd');
    setPerson({ name: "Luigi", age: 45 });
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and he's {person.age} years old</Text>
      <View style={styles.btnContainer}>
        <Button title="Update name" onPress={clickHandler} />
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

  btnContainer: {
    marginTop: 20
  }

});

export default App;