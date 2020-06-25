import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Card from '../shared/Card.jsx';
import globalStyles, { images } from '../style/globalStyles.js';

const ReviewDetails = ({ navigation, route }) => {

    // Passing in data into the Review Details page
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <Text>{ rating }</Text>
                <View style={styles.rating}>
                    <Text>Film rating: </Text>
                    <Image source={images.ratings[rating] }/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }

});

export default ReviewDetails;
