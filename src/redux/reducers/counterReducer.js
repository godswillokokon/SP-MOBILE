const initialState = {
  counter: 1,
  name: 'counter store',
  token: '',
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return {...state};
  }
};
