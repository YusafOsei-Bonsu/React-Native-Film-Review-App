import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  
  const [people, setPeople] = useState([
    { name: "Shaun", key: '1' },
    { name: "Yoshi", key: '2' },
    { name: "Mario", key: '3' },
    { name: "Luigi", key: '4' },
    { name: "Peach", key: '5' },
    { name: "Toad", key: '6' },
    { name: "Bowser", key: '7' },
  ]);

  return (
    <View style={styles.container}>
      {/* Printing each person in a vertical fashion (within a scrollview) */}
      <ScrollView>
        { people.map((person) => {
              return (
                <View key={person.key}>
                  <Text style={styles.person}>{person.name}</Text>
                </View>
              );
          }) }
      </ScrollView>
    </View>
  );
}

// React Native's way of CSS styling
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  person: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'pink'
  }

});

export default App;