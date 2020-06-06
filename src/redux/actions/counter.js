import * as axios from 'axios';

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

// export const LOGIN = (email, password) => {
//   return (dispatch) => {
//     axios
//       .post('https://Spreadprolimited.com/api/user/login', {
//         auth: {
//           username: email,
//           password: password,
//         },
//       })
//       .then(function (response) {
//         console.log(response);
//         dispatch({
//           type: 'USER_LOGIN_SUCCESS',
//           payload: {
//             token: response,
//           },
//         });
//       });
//   };
// };
