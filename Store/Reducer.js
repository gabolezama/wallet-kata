const INITIAL_STATE = {
    balance: 0,
    loading: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WITHDRAWAL_SUCCESS':
      return {
        ...state,
        balance: state.balance - parseFloat(action.payload)
      }
    case 'DEPOSIT_SUCCESS':
      return {
        ...state,
        balance: state.balance + parseFloat(action.payload)
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