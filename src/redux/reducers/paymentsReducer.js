const initialState = {
  payment: {},
  paymentError: null,
};
export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAYMENT_SUCCESS':
      return {
        ...state,
        payment: action.payload,
      };
    case 'PAYMENT_FAILED':
      return {
        ...state,
        paymentError: action.payload,
      };
    default:
      return {...state};
  }
};
