const initialState = {
  careers: {},
  careersError: null,
};
export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CAREERS_SUCCESS':
      return {
        ...state,
        careers: action.payload,
      };
    case 'FETCH_CAREERS_FAILED':
      return {
        ...state,
        careersError: action.payload,
      };
    default:
      return {...state};
  }
};
