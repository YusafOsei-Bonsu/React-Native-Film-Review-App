import { StyleSheet } from 'react-native';

// Styles to be used anywhere in the Review app
const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
       marginVertical: 8,
       lineHeight: 20 
    }
});

// All the possible heart ratings (images)
export const images = {

    ratings: {
        '1': require("../assets/oneHeart.png"),
        '2': require("../assets/twoHearts.png"),
        '3': require("../assets/threeHearts.png"),
        '4': require("../assets/fourHearts.png"),
        '5': require("../assets/fiveHearts.png"),
    }

};

export default globalStyles;