const INITIAL_STATE = {
    balance: 0
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WITHDRAWAL_SUCCESS':
      return {
        ...state,
        balance: balance - parseFloat(action.payload)
      }
    case 'DEPOSIT_SUCCESS':
      return {
        ...state,
        balance: balance + parseFloat(action.payload)
      };
    default:
      return state
  }
}