const initialState = {
  wallet: {},
  walletError: null,
  transactionOverview: {},
  transactionOverviewError: null,
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
    case 'GET_OVERVIEW_SUCCESS':
      return {
        ...state,
        transactionOverview: action.payload,
      };
    case 'GET_OVERVIEW_FAILED':
      return {
        ...state,
        transactionOverviewError: action.payload,
      };
    default:
      return {...state};
  }
};
