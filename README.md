This repository presents my learning of React Native (RN). I used [Net Ninja's React Native tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ) to build my knowledge of RN. Using this knowledge, I created a RN film review app.  

To run this app...
1. Clone the repository.
2. Run an Android emulator.
3. From the root ("myfirstproject"), Enter `npm start`/`expo start` in the terminal.

## Knowledge I gained from this learning experience
- State.
- Modals.
- Scroll views.
- Touchable components.
- CSS styling in React Native.
- Showing images and setting background images.
- Stack & Drawer Navigation.
- Created a to-do list.
- To rename a branches using Git, I performed the following steps (in terminal):
    1. `git checkout <old_name>` to navigate to the branch I want to rename.
    2. `git branch -m <new_name>` to rename the local branch.

## Blockers/Resolutions
- When learning React Native, I would encounter this error: `Module AppRegistry is not a registered callable module (calling runApplication)`, multiple times. To resolve it, I had to restart the Expo server, which rebuilds the app. 
- In regards to the `createAppContainer()` method, I kept recieving the following error: `TypeError: Object(...) is not a function`. I resolved it by writing the below code (`routes/Navigator.js`)...

```javascript
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```