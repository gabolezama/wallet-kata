export const operate = function( operation, qty ) {
    return async (dispatch) => {
        try {

        dispatch({ type: 'SET_LOADER', payload: true });

        setTimeout(async() =>{
            dispatch({ type: operation === 'deposit'? 'DEPOSIT_SUCCESS' : 'WITHDRAWAL_SUCCESS', payload: qty});
            dispatch({ type: 'SET_LOADER', payload: false });
        }, 3000)

        
        } catch (error) {
            console.log('Error: ' + error);
            dispatch({ type: operation === 'deposit'? 'DEPOSIT_FAIL' : 'WITHDRAWAL_FAIL', payload: `Error: ${error.stack}` });
        }
    };
};