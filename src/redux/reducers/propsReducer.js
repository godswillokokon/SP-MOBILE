const initialState = {
  properties: {},
  fetchError: null,
};
export const propsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROPERTIES_SUCCESS':
      return {
        ...state,
        properties: action.payload,
      };
    case 'FETCH_PROPERTIES_FAILED':
      return {
        ...state,
        fetchError: action.payload,
      };
    default:
      return {...state};
  }
};
