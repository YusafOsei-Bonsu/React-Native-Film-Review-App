import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About.jsx';
import CustomHeader from '../shared/CustomHeader.jsx';

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
    return (
        <Stack.Navigator 
            initialRouteName="About" 
            screenOptions={{
                headerStyle: { backgroundColor: '#1E90FF' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen name="About" component={About} options={{ headerTitle: () => <CustomHeader navigation={navigation}/> }} />
        </Stack.Navigator>
    );
}

export default AboutStack;