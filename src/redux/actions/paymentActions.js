import axios from 'axios';

export const MakePayment = (data) => (dispatch) => {
  console.log(data, 'wetin i dey send');
  axios({
    method: 'post',
    url: 'https://api.spreadprolimited.com/api/payment',
    data: data,
  })
    .then(function (response) {
      //handle success
      console.log(response.data.house, 'innn');
      dispatch({
        type: 'FETCH_PROPERTY_SUCCESS',
        payload: {
          house: response.data.house,
        },
      });
      // dispatch({
      //   type: 'PAYMENT_SUCCESS',
      //   payload: {
      //     payment: response.data.house,
      //   },
      // });
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
