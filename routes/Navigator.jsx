import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home.jsx';
import ReviewDetails from '../components/ReviewDetails.jsx';

const Drawer = createDrawerNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;