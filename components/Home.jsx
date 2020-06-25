import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/Card.jsx';
import globalStyles from '../style/globalStyles.js';

const Home = ({ navigation }) => {

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

export default Home;
