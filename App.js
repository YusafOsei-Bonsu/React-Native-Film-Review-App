import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import AddTodo from './components/addTodo.jsx';
import Sandbox from './components/Sandbox.jsx'

const App = () => {
  // Todo items
  const [todos, setTodos] = useState([
    { text: "catch-up with friends", key: '1' },
    { text: "calisthenics", key: '2' },
    { text: "coding", key: '3' }
  ]);

  // Removes the selected to-do task
  const pressHandler = (key) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));

  // Appends new todo tasks into the list
  const submitHandler = (text) => {
    // Check if the text is valid
    if (text.length > 3) {
      // update state
      setTodos((prevTodos) => [{ text, key: Math.random().toString() }, ...prevTodos]);
    } else {
      // Inform the user of the error
      Alert.alert("Oops!", "Todos must be over 3 characters longs!", [
        {text: "Understood", onPress: () => console.log("alert closed")}
      ]);
    }
  }

  return <Sandbox />;
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
    //       <AddTodo submitHandler={submitHandler} />
    //       <View style={styles.list}>
    //         <FlatList 
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandler={pressHandler}/>
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback> 
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