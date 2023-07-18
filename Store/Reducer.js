const INITIAL_STATE = {
    id: 0,
    currencies: {},
    transactions: [],
    loading: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    console.log('---------->', action);
  switch (action.type) {
    case 'WITHDRAWAL_SUCCESS':
      return {
        ...state,
        id: state.id + 1,
        currencies:{
            ...state.currencies,
            [action.payload.currency]: (state.currencies[action.payload.currency] || 0) - parseFloat(action.payload.qty)
        },
        transactions: [...state.transactions, {id: state.id + 1, operation: 'retiro', amount: action.payload.qty, currency: action.payload.currency}]
      }
    case 'DEPOSIT_SUCCESS':
      return {
        ...state,
        id: state.id + 1,
        currencies:{
            ...state.currencies,
            [action.payload.currency]: (state.currencies[action.payload.currency] || 0) + parseFloat(action.payload.qty)
        },
        transactions: [...state.transactions, {id: state.id + 1, operation: 'deposito', amount: action.payload.qty, currency: action.payload.currency}]
      };
    case 'EXCHANGE_SUCCESS':
      return {
        ...state,
        id: state.id + 1,
        currencies:{
            ...state.currencies,
            [action.payload.currencyTo]: (state.currencies[action.payload.currencyTo] || 0) + parseFloat(action.payload.exchangedQty),
            [action.payload.currency]: (state.currencies[action.payload.currency] || 0) - parseFloat(action.payload.qty),
        },
        transactions: [...state.transactions, {id: state.id + 1, operation: 'exchange', amount: action.payload.exchangedQty, currency: `De ${action.payload.currency} a ${action.payload.currencyTo}`}]
      };
    case 'SET_LOADER':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state
  }
}