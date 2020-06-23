import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const ReviewDetails = ({ navigation, route }) => {

    // Passing in data into the Review Details page
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
            {/* Button press navigates user to the homepage */}
            <Button title="Back to Homepage" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

export default ReviewDetails;
