import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../style/globalStyles.js';

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    );
}

export default Home;
