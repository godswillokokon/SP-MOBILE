const initialState = {
  wallet: {},
  walletError: null,
};
export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FUND_SUCCESS':
      return {
        ...state,
        wallet: action.payload,
      };
    case 'FUND_FAILED':
      return {
        ...state,
        walletError: action.payload,
      };
    default:
      return {...state};
  }
};
