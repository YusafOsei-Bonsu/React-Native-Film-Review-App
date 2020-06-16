import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home.jsx';
import ReviewDetails from '../components/ReviewDetails.jsx';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ title: "Homepage", headerStyle: { backgroundColor: '#A9A9A9' } }} />
                <Stack.Screen 
                    name="ReviewDetails" 
                    component={ReviewDetails} 
                    options={{ title: "Review Details", headerStyle: { backgroundColor: '#A9A9A9' } }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;