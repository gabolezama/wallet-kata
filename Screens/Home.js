import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Balance from '../Components/Balance';

export default function Home(props) {

  return (
    <View style={styles.container}>
        <Balance/>
        <Text>Seleccione una opcion: </Text>

        <TouchableOpacity style={styles.boton} onPress={() =>{ props.navigation.navigate('amount', {operation: 'deposit'})}}>
            <Text style={styles.texto}>Depositar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() =>{ props.navigation.navigate('amount', {operation: 'withdraw'})}}>
            <Text style={styles.texto}>Retirar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() =>{ props.navigation.navigate('amount', {operation: 'report'})}}>
            <Text style={styles.texto}>Reporte</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
  });