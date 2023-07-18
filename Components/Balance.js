import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const balance = useSelector((state) => state.balance)

  return (
    <View>
      <Text style={styles.input}>{balance}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 90,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 36
    }
})