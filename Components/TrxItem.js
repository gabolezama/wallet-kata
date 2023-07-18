import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TrxItem({ id, operacion, cantidad, moneda }) {

  return (
    <View style={styles.container}>
      <Text>ID de Operación: {id} ------</Text>
      <Text>Tipo de Operación: {operacion}</Text>
      <Text>Cantidad: {cantidad}</Text>
      <Text>Moneda: {moneda}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        fontSize: 12,
        alignItems: 'space-around',
        margin: 10
    }
})