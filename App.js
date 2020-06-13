import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';

const App = () => {
  // Todo items
  const [todos, setTodos] = useState([
    { text: "catch-up with friends", key: '1' },
    { text: "calisthenics", key: '2' },
    { text: "coding", key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* To form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

// React Native's way of CSS styling
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content: {
    padding: 40
  },

  list: {
    marginTop: 20
  }

});

export default App;