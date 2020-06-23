import React from 'react';
import { Text, View } from 'react-native';
import Card from '../shared/Card.jsx';
import globalStyles from '../style/globalStyles.js';

const ReviewDetails = ({ navigation, route }) => {

    // Passing in data into the Review Details page
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <Text>{ rating }</Text>
            </Card>
        </View>
    )
}

export default ReviewDetails;
