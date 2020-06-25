import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native'
import globalStyles from '../style/globalStyles.js';
import { Formik } from 'formik';

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            onSubmit={(values, actions) => {
                // Resets form to its initial state
                actions.resetForm();
                // Appends a new review to the list
                addReview(values);
            }}>
                {(props) => (
                    <View>
                        {/* The review title written by the user */}
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                        />

                        {/* The review written by the user */}
                        <TextInput
                            multiline 
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />

                        {/* The rating out of 5 */}
                        <TextInput
                            multiline 
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />

                        <Button title="Submit" color="maroon" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ReviewForm;

