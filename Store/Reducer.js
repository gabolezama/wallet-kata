const INITIAL_STATE = {
    id: 0,
    ARS: 0,
    USD: 0,
    EUR: 0,
    transactions: [],
    loading: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WITHDRAWAL_SUCCESS':
      return {
        ...state,
        id: state.id + 1,
        [action.payload.currency]: state[action.payload.currency] - parseFloat(action.payload.qty),
        transactions: [...state.transactions, {id: state.id + 1, operacion: 'retiro', cantidad: action.payload.qty, moneda: action.payload.currency}]
      }
    case 'DEPOSIT_SUCCESS':
      return {
        ...state,
        id: state.id + 1,
        [action.payload.currency]: state[action.payload.currency] + parseFloat(action.payload.qty),
        transactions: [...state.transactions, {id: state.id + 1, operacion: 'depoosito', cantidad: action.payload.qty, moneda: action.payload.currency}]
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