import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About.jsx';

const Stack = createStackNavigator();

const AboutStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="About" 
            screenOptions={{
                headerStyle: { backgroundColor: '#999' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen name="About" component={About} options={{ title: "About" }} />
        </Stack.Navigator>
    );
}

export default AboutStack;