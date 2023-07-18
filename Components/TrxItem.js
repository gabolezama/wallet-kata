import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TrxItem({ id, operation, amount, currency }) {

  return (
    <View style={styles.container}>
      <Text>ID de Operación: {id} ------</Text>
      <Text>Tipo de Operación: {operation}</Text>
      <Text>Cantidad: {amount}</Text>
      <Text>Moneda: {currency}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        fontSize: 12,
        justifyContent: 'space-around',
        alignContent: 'space-around',
        margin: 15
    }
})