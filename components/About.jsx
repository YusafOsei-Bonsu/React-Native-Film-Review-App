import React from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../style/globalStyles.js';

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    )
}

export default About;