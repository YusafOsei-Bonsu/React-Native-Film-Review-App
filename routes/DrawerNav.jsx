import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AboutStack from './AboutStack.jsx';
import HomeStack from './HomeStack.jsx';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="About" component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNav;