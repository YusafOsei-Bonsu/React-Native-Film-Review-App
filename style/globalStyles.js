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
        color: '#000'
    },
    paragraph: {
       marginVertical: 8,
       lineHeight: 20 
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center"
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