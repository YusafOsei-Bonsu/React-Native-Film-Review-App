import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button } from 'react-native';

const AddTodo = () => {

    // addTodo state
    const [text, setText] = useState('');

    // Keep track of what the user types in
    const changeHandler = (val) => setText(val);

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
        </View>
    )
}

// CSS for above component
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});

export default AddTodo;