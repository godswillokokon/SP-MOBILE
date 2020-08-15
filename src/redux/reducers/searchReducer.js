const initialState = {
  search: {},
  searchError: null,
};
export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_SUCCESS':
      return {
        ...state,
        search: action.payload,
      };
    case 'FETCH_SEARCH_FAILED':
      return {
        ...state,
        searchError: action.payload,
      };
    default:
      return {...state};
  }
};
