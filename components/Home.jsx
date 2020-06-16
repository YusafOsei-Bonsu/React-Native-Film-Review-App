import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const Home = ({ navigation }) => {

    // Navigates to the "Review Details" page after button press
    const navHandler = () => navigation.push('ReviewDetails');

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is the Home screen</Text>
            <Button title="Go to Review Details" onPress={navHandler} />
        </View>
    );
}

export default Home;
