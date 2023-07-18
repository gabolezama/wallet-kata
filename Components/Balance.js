import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const ars = useSelector((state) => state.ARS);
    const usd = useSelector((state) => state.USD);
    const eur = useSelector((state) => state.EUR);

  return (
    <View>
      <Text>BALANCE EN ARS: </Text>
      <Text style={styles.input}>{ars}</Text>
      <Text>BALANCE EN USD: </Text>
      <Text style={styles.input}>{usd}</Text>
      <Text>BALANCE EN EUR: </Text>
      <Text style={styles.input}>{eur}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 36
    }
})