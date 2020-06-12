import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const App = () => {
  
  const [people, setPeople] = useState([
    { name: "Shaun", id: '1' },
    { name: "Yoshi", id: '2' },
    { name: "Mario", id: '3' },
    { name: "Luigi", id: '4' },
    { name: "Peach", id: '5' },
    { name: "Toad", id: '6' },
    { name: "Bowser", id: '7' },
  ]);

  return (
    <View style={styles.container}>
      {/* Printing each person in a vertical fashion (within a scrollview) */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.person}>{item.name}</Text>
        )}
      />
    </View>
  );
}

// React Native's way of CSS styling
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  person: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop: 24
  }

});

export default App;