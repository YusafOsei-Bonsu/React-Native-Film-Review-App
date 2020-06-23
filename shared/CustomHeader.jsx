import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomHeader = ({ navigation, title="React Native" }) => {

    // Open drawer menu after pressing Menu button
    const openMenu = () => navigation.openDrawer();

    return (
        <View style={styles.header}>
         <MaterialIcons name="menu" size={30} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E90FF',
    },
    
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16
    }
});

export default CustomHeader;