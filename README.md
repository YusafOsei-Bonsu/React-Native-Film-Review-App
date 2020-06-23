This repository presents my learning of React Native (RN). I used [Net Ninja's RN tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ) to build my knowledge of RN. 

## Knowledge I gained from this learning experience
- State.
- Scroll views.
- Touchable components.
- CSS styling in React Native.
- How to create a RN to-do list.
- How to create a RN reviews app.
- To rename a branches using Git, I performed the following steps (in terminal):
    1. `git checkout <old_name>` to navigate to the branch I want to rename.
    2. `git branch -m <new_name>` to rename the local branch.

## Blockers/Resolutions
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