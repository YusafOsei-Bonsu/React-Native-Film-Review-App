import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomHeader = ({ navigation, title="React Native" }) => {

    // Open drawer menu after pressing Menu button
    const openMenu = () => navigation.openDrawer();

    return (
        <ImageBackground source={require("../assets/gameBackground.png")} style={styles.header}>
         <MaterialIcons name="menu" size={30} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heartLogo.png")} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16
    },

    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },

    headerTitle: {
        flexDirection: 'row'
    }
});

export default CustomHeader;