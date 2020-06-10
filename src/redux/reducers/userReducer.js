const initialState = {
  token: null,
  user: {},
  authError: null,
  createResponse: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'USER_DATA':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'USER_AUTH_ERROR':
      return {
        ...state,
        authError: action.payload,
      };
    case 'USER_CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        createResponse: action.payload,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'USER_LOGOUT_SUCCESS':
      return {
        ...state,
        token: action.payload,
        user: action.payload,
      };
    default:
      return {...state};
  }
};
