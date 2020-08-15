const initialState = {
  houses: {},
  house: {},
  reserve: {},
  reserved_houses: {},
  reserved_lands: {},
  bought_houses: {},
  bought_lands: {},
  payment: {},
  paymentError: null,
  fetchError: null,
};
export const propsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROPERTIES_SUCCESS':
      return {
        ...state,
        houses: action.payload,
      };
    case 'FETCH_PROPERTY_SUCCESS':
      return {
        ...state,
        house: action.payload,
      };
    case 'RESERVE_PROPERTY_SUCCESS':
      return {
        ...state,
        reserve: action.payload,
      };
    case 'FETCH_RESERVED_PROPERTIES_SUCCESS':
      return {
        ...state,
        reserved_houses: action.payload.reserved_houses,
        reserved_lands: action.payload.reserved_lands,
      };
    case 'FETCH_BOUGHT_PROPERTIES_SUCCESS':
      return {
        ...state,
        bought_houses: action.payload.bought_houses,
        bought_lands: action.payload.bought_lands,
      };
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
    case 'FETCH_FAILED':
      return {
        ...state,
        fetchError: action.payload,
      };
    default:
      return {...state};
  }
};
