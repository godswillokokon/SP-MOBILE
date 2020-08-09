import * as axios from 'axios';
import Session from '@utils/Session';
import { ToastAndroid } from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
};

const BASE = 'https://api.spreadprolimited.com/api';

const parseError = (err) => {
  if (err?.response?.data?.errors) {
    const message = Object.values(err.response.data.errors)[0];
    // ToastAndroid.show(
    //   `${message}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log(message);
  } else if (err?.response?.data?.error?.message) {
    // ToastAndroid.show(
    //   `${err.response.data.error.message}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log(err.response.data.error.message);
  } else if (err?.response?.data?.message) {
    // ToastAndroid.show(
    //   `${err.response.data.message}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log(err.response.data.message);
  } else if (err?.response?.data) {
    // ToastAndroid.show(
    //   `${err.response.data}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log(err.response.data);
  } else if (err.message) {
    // ToastAndroid.show(
    //   `${err.message}`,
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log(err.message);
  } else {
    // ToastAndroid.show(
    //   'Error Occured',
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
    console.log('Error Occured');
  }
};
export default parseError;

export const Credit = (data, navigation) => async (dispatch) => {
  // console.log(data, 'wetin i dey send');
  const token = await Session.getData('@token');
  await axios
    .post(
      'https://api.spreadprolimited.com/api/property_wallet/credit',
      {
        amount: data.amount,
        payment_plan: data.payment_plan,
        reference: data.reference,
      },
      {
        headers: {
          Authorization: token,
          'content-type': 'application/json',
        },
      },
    )
    .then((response) => {
      //handle success
      console.log(response.data, 'innn');
      showToast(response.data.success);
      dispatch({
        type: 'FUND_SUCCESS',
        payload: response.data.success,
      });
    })
    .catch(function (error) {
      parseError(error);
      dispatch({
        type: 'FUND_FAILED',
        paymentError: error,
      });
    });
};
