import React from 'react'
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import TrxItem from '../Components/TrxItem'

export default function Report() {
    const transactions = useSelector(state => state.transactions);

  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TrxItem {...item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}