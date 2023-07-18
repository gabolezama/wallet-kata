import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { exchange, operate } from '../Store/Actions';
import CustomButton from '../Components/CustomButton';

export default function Amount(props) {

    const { route: { params: {operation: operation} } } = props;

    const dispatcher = useDispatch();

    const operationText = operation === 'deposit'? 'Depositar': operation === 'report'? 'Reporte' : 'Retirar';

    const [currency, setCurrency] = useState('');
    const [currencyTo, setCurrencyTo] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        // Solo permitir números y el punto decimal
        const numericValue = text.replace(/[^0-9.]/g, '');
        setInputValue(numericValue);
    };
    return (
        <View style={styles.container}>
            <Text>Indique tipo de moneda a {operation === 'deposit'? 'depositar' : operation === 'exchange'? 'cambiar' : 'extraer'}</Text>
            <View style={styles.currencySelection}>
                <CustomButton text={'ARS'} execute={() =>{ setCurrency('ARS'); setInputValue('0'); }}/>
                <CustomButton text={'USD'} execute={() =>{ setCurrency('USD'); setInputValue('0'); }}/>
                <CustomButton text={'EUR'} execute={() =>{ setCurrency('EUR'); setInputValue('0'); }}/>
            </View>
            {operation === 'exchange' && currency !== '' &&
            <View style={styles.currencySelection}>
                <CustomButton text={'ARS'} execute={() =>{ setCurrencyTo('ARS'); setInputValue('0'); }}/>
                <CustomButton text={'USD'} execute={() =>{ setCurrencyTo('USD'); setInputValue('0'); }}/>
                <CustomButton text={'EUR'} execute={() =>{ setCurrencyTo('EUR'); setInputValue('0'); }}/>
            </View>}
            { currency && operation !== 'exchange' && <Text>LA MONEDA SELLECCIONADE ES: '{currency}'</Text>}
            { currency && currencyTo && operation === 'exchange' && <Text>EL CAMBIO SERÁ DE '{currency}' A '{currencyTo}'</Text>}
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
                keyboardType="numeric"
                editable={operation === 'exchange'? currency !== '' && currencyTo !== '' : currency !== ''}
            />
            <CustomButton 
                text={operation === 'deposit'? 'Depositar': operation === 'exchange'? 'Cambiar' : 'Retirar'} 
                execute={operation !== 'exchange'? 
                () => { dispatcher( operate(operation, currency, inputValue || 0) ); props.navigation.navigate('home');}:
                () => { dispatcher( exchange(operation, currency, currencyTo, inputValue || 0) ); props.navigation.navigate('home');}
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        width: '100%',
        height: 90,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 36
    },
    currencySelection:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    }
  });