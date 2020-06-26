import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native'
import globalStyles from '../style/globalStyles.js';
import { Formik } from 'formik';
import * as yup from 'yup';

// For validation
const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test("is rating 1-5", 'Rating must be a number from 1-5', (value) => {
        return ((parseInt(value) < 6) && (parseInt(value) > 0));
    })
});

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            validationSchema={reviewSchema}
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
                        {/* Upon being pressed, a new review is added */}
                        <Button title="Submit" color="maroon" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ReviewForm;