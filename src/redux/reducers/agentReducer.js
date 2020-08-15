const initialState = {
  agent: {},
  agentError: null,
};
export const agentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AGENT_SUCCESS':
      return {
        ...state,
        agent: action.payload,
      };
    case 'FETCH_AGENT_FAILED':
      return {
        ...state,
        agentError: action.payload,
      };
    default:
      return {...state};
  }
};
