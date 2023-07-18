import { FlatList, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import * as CURRENCY_LIST from '../ExchangeInfo.json'

export default function CurrencySelector(props) {

  return (
    <View>
      <FlatList
        data={Object.keys(CURRENCY_LIST).filter( item => item !== props.currency)}
        renderItem={({item}) =>(<CustomButton text={item} execute={()=> props.execute(item)}/>)}
      />
    </View>
  )
}