import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is the Home screen</Text>
        </View>
    );
}

export default Home;
