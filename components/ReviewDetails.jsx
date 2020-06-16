import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const ReviewDetails = ({ navigation }) => {

    // Navigates back to the previous page that the user was on
    const navHandler = () => navigation.goBack();

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is the Review Details Screen</Text>
            <Button title="Back to Home Screen"  onPress={navHandler}/>
        </View>
    )
}

export default ReviewDetails;
