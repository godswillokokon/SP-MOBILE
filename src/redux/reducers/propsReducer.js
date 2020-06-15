const initialState = {
  houses: {},
  house: {},
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
    case 'FETCH_FAILED':
      return {
        ...state,
        fetchError: action.payload,
      };
    default:
      return {...state};
  }
};
