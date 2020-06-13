import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const TodoItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }

});

export default TodoItem;