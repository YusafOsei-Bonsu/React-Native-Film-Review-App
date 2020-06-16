import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const ReviewDetails = ({ route }) => {

    // Navigates back to the previous page that the user was on
    // const navHandler = () => navigation.goBack();

    const { title, rating, body } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ rating }</Text>
            <Text>{ body }</Text>
        </View>
    )
}

export default ReviewDetails;
