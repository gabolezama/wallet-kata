import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Balance() {
    const currencies = useSelector((state) => state.currencies);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(currencies)}
        renderItem={({item}) =>(
            <View>
                <Text>
                    Banlance en {item[0]}: {item[1]}
                </Text>
            </View>
        )}
      />
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