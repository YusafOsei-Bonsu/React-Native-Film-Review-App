import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Card from '../shared/Card.jsx';
import globalStyles from '../style/globalStyles.js';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../components/ReviewForm.jsx';

const Home = ({ navigation }) => {
    const [modalOpen, setModal] = useState(false);
    const [reviews, setReviews] = useState([
        { 
            title: "Avengers: Infinity War", 
            rating: 5, 
            body: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
            key: 1 
        },
        { 
            title: "The Dark Knight Rises", 
            rating: 4, 
            body: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
            key: 2
        },
        { 
            title: "Joker", 
            rating: 3, 
            body: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society...",
            key: 3 
        },
    ]);

    return (
        <View style={globalStyles.container}>
            {/* The Modal */}
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    {/* Toggles the modal off */}
                    <MaterialIcons 
                        name="close" 
                        size={24} 
                        onPress={() => setModal(false)} 
                        style={ styles.modalToggle }
                        />
                    <ReviewForm />
                </View>
            </Modal>
            
            {/* Toggles the modal on */}
            <MaterialIcons 
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModal(true)}
            />

            <FlatList
                keyExtractor={item => item.key.toString()} 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>    
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>  
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },

    modalContent: {
        flex: 1
    }
});

export default Home;
