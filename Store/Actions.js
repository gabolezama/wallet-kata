import * as INFO from '../ExchangeInfo.json'

export const operate = function( operation, currency, qty ) {
    return async (dispatch) => {
        try {

        dispatch({ type: 'SET_LOADER', payload: true });

        setTimeout(async() =>{
            dispatch({ type: operation === 'deposit'? 'DEPOSIT_SUCCESS' : 'WITHDRAWAL_SUCCESS', payload:{ currency, qty }});
            dispatch({ type: 'SET_LOADER', payload: false });
        }, 2000)

        } catch (error) {
            console.log('Error: ' + error);
            dispatch({ type: operation === 'deposit'? 'DEPOSIT_FAIL' : 'WITHDRAWAL_FAIL', payload: `Error: ${error.stack}` });
        }
    };
};

export const exchange = function( operation, currency, currencyTo, qty ) {
    return async (dispatch) => {
        try {
        let exchangedQty;

        dispatch({ type: 'SET_LOADER', payload: true });

        setTimeout(async() =>{
            exchangedQty = parseFloat(qty) / parseFloat(INFO[`${currency}/${currencyTo}`])
            dispatch({ type: 'EXCHANGE_SUCCESS', payload: { currency, currencyTo, exchangedQty, qty }})

            dispatch({ type: 'SET_LOADER', payload: false });
        }, 2000)

        
        } catch (error) {
            console.log('Error: ' + error);
            dispatch({ type: 'EXCHANGE_FAIL', payload: `Error: ${error.stack}` });
        }
    };
};