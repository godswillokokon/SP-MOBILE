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


export const GetCareers = () => async (dispatch) => {
  try {
    await axios
      .get(`${BASE}/spread_careers`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log(response.data.careers, 'kkkkkkkkk');
        dispatch({
          type: 'FETCH_CAREERS_SUCCESS',
          payload: response.data.careers,
        });
      });
  } catch (error) {
    console.log(error, 'err');
    dispatch({
      type: 'FETCH_CAREERS_FAILED',
      transactionOverviewError: error,
    });
  }
};
