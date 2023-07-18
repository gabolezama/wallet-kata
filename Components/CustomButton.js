import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton(props) {
  return (
    <TouchableOpacity disabled={props.disabled} style={{...styles.button, backgroundColor: props.disabled ? 'grey' : '#007bff'}} onPress={() => props.execute()}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
})