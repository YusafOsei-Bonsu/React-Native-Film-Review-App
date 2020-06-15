import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home.jsx';
import ReviewDetails from '../components/ReviewDetails.jsx';

const HomeStack = createStackNavigator({
    Home: { screen: Home },
    ReviewDetails: { screen: ReviewDetails }
});

export default createAppContainer(HomeStack);