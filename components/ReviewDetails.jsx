import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReviewDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Review Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ReviewDetails;