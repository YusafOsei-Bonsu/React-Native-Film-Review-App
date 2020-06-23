import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home.jsx';
import ReviewDetails from '../components/ReviewDetails.jsx';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#999' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen name="Home" component={Home} options={{ title: "Homepage" }} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: "Review Details" }} />
        </Stack.Navigator>
    );
}

export default HomeStack;