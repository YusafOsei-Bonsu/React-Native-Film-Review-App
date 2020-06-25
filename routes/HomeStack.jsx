import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home.jsx';
import ReviewDetails from '../components/ReviewDetails.jsx';
import CustomHeader from '../shared/CustomHeader.jsx';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: '#000',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerTitle: () => <CustomHeader navigation={navigation} title="Home" /> }} />
            <Stack.Screen 
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ title: "Review Details" }} />
        </Stack.Navigator>
    );
}

export default HomeStack;