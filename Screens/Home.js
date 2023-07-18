import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import Balance from '../Components/Balance';
import { useSelector } from 'react-redux';
import CustomButton from '../Components/CustomButton';

export default function Home(props) {
  const loading = useSelector((state)=> state.loading)
  return (
    <View style={styles.container}>

        { loading &&
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#00ced1" />
            </View>
        }

        <View style={styles.subcontainer}>
            <Balance/>
            <Text>Seleccione una opcion: </Text>

            <CustomButton text={'Depositar'} execute={() =>{ props.navigation.navigate('amount', {operation: 'deposit'})}}/>
            <CustomButton text={'Retirar'} execute={() =>{ props.navigation.navigate('amount', {operation: 'withdraw'})}}/>
            <CustomButton text={'Reporte'} execute={() =>{ props.navigation.navigate('amount', {operation: 'report'})}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },
    subcontainer:{
        flex: 1,
        width: '100%',
        marginTop: 50,
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
  });