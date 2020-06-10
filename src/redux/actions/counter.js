export const INCREMENT_COUNTER = () => {
  return (dispatch) => {
    dispatch({type: 'INCREMENT_COUNTER'});
  };
};

export const DECREMENT_COUNTER = () => {
  return (dispatch) => {
    dispatch({type: 'DECREMENT_COUNTER'});
  };
};

export const CHANGE_NAME = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: data,
      },
    });
  };
};
