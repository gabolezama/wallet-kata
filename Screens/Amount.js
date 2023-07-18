import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default function Amount(props) {
    const { route: { params: {operation: operation} } } = props;

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        // Solo permitir números y el punto decimal
        const numericValue = text.replace(/[^0-9.]/g, '');
        setInputValue(numericValue);
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.boton} onPress={() => props.navigation.navigate('home')}>
                <Text style={styles.texto}>{operation}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    texto: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 90,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 36
    },
  });