
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '@/components/Button';


const CreateProductScreen = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');

    const resetField = () => {
        setName('');
        setPrice('');
    };

    const validateInput = () => {

    };

    const onCreate = () => {
        console.log('Creating Product: ', name);

        // save in the database
        resetField();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput 
                value={name} 
                onChangeText={setName}
                placeholder="Name" 
                style={styles.input}/>

            <Text style={styles.label}>Price (R)</Text>
            <TextInput
                value={price}
                onChangeText={setPrice} 
                placeholder="R19.99" 
                style={styles.input}
                keyboardType='numeric'
                />

            <Button onPress={onCreate} text='Create'/>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },

    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },

    label: {
        color: 'gray',
        fontSize: 16,
    },
});

export default CreateProductScreen;