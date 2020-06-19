import axios from 'axios';
import Session from '@utils/Session';

export const MakePayment = (data) => (dispatch) => {
  console.log(data, 'wetin i dey send');
  axios({
    method: 'post',
    url: 'https://Spreadprolimited.com/api/payment',
    data: data,
  })
    .then(function (response) {
      //handle success
      console.log(response.data.house, 'innn');
      dispatch({
        type: 'PAYMENT_SUCCESS',
        payload: {
          payment: response.data.house,
        },
      });
    })
    .catch(function (error) {
      //handle error
      console.log(error, 'err');
      dispatch({
        type: 'PAYMENT_FAILED',
        paymentError: error,
      });
    });
};
