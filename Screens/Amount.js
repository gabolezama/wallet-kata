import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { operate } from '../Store/Actions';
import CustomButton from '../Components/CustomButton';

export default function Amount(props) {

    const { route: { params: {operation: operation} } } = props;

    const dispatcher = useDispatch();

    const operationText = operation === 'deposit'? 'Depositar': operation === 'report'? 'Reporte' : 'Retirar';

    const [currency, setCurrency] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        // Solo permitir números y el punto decimal
        const numericValue = text.replace(/[^0-9.]/g, '');
        setInputValue(numericValue);
    };
    return (
        <View style={styles.container}>
            <Text>Indique tipo de moneda a {operation === 'deposit'? 'depositar' : 'extraer'}</Text>
            <View style={styles.currencySelection}>
                <CustomButton text={'ARS'} execute={() =>{ setCurrency('ARS'); setInputValue('0'); }}/>
                <CustomButton text={'USD'} execute={() =>{ setCurrency('USD'); setInputValue('0'); }}/>
                <CustomButton text={'EUR'} execute={() =>{ setCurrency('EUR'); setInputValue('0'); }}/>
            </View>
            { currency && <Text>LA MONEDA SELLECCIONADE ES: {currency}</Text>}
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInputChange}
                keyboardType="numeric"
                editable={currency !== ''}
            />
            <CustomButton 
                text={operation === 'deposit'? 'Depositar': 'Retirar'} 
                execute={() => { dispatcher( operate(operation, currency, inputValue || 0) ); props.navigation.navigate('home');}}
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