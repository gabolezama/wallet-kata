import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Balance from '../Components/Balance';
import { useSelector } from 'react-redux';
import CustomButton from '../Components/CustomButton';

export default function Home(props) {
    const loading = useSelector((state)=> state.loading)
    const state = useSelector((state)=> state);
    console.log(state);
  return (
    <View style={styles.container}>

        { loading &&
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#00ced1" />
            </View>
        }

        <View style={styles.subcontainer}>
            <Text>Seleccione una opcion: </Text>

            <CustomButton text={'Depositar'} execute={() =>{ props.navigation.navigate('amount', {operation: 'deposit'})}}/>
            <CustomButton text={'Retirar'} execute={() =>{ props.navigation.navigate('amount', {operation: 'withdraw'})}}/>
            <CustomButton text={'Exchange'} execute={() =>{ props.navigation.navigate('amount', {operation: 'exchange'})}}/>
            <CustomButton text={'Reporte'} execute={() =>{ props.navigation.navigate('report', {operation: 'report'})}}/>
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