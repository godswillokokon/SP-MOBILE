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
    console.log(message);
  } else if (err?.response?.data?.error?.message) {
    console.log(err.response.data.error.message);
  } else if (err?.response?.data?.message) {
    console.log(err.response.data.message);
  } else if (err?.response?.data) {
    console.log(err.response.data);
  } else if (err.message) {
    console.log(err.message);
  } else {
    console.log('Error Occured');
  }
};
export default parseError;

export const GetHouses = () => async (dispatch) => {
  try {
    await axios
      .get(`${BASE}/houses`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        dispatch({
          type: 'FETCH_PROPERTIES_SUCCESS',
          payload: {
            houses: response.data.houses,
          },
        });
      });
  } catch (error) {
    console.log(error, 'err');
    dispatch({
      type: 'FETCH_FAILED',
      fetchError: error,
    });
  }
};
export const GetHouse = (slug) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .get(`${BASE}/user/house/${slug}`, {
        headers: {
          Authorization: token,
          Accept: 'application/json',
        },
      })
      .then((response) => {
        dispatch({
          type: 'FETCH_PROPERTY_SUCCESS',
          payload: {
            house: response.data.house,
          },
        });
      });
  } catch (error) {
    console.log(error, 'err');
    dispatch({
      type: 'FETCH_FAILED',
      fetchError: error,
    });
  }
};

export const ReserveHouse = (slug) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    // console.log(slug);
    await axios
      .get(`https://api.spreadprolimited.com/api/house/${slug}/reserve`, {
        headers: {
          Authorization: token,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        // console.log(response.data.property);
        dispatch({
          type: 'RESERVE_PROPERTY_SUCCESS',
          payload: {
            reserve: response.data.property,
          },
        });
        showToast(response.data.message);
      });
  } catch (error) {
    parseError(error);
    dispatch({
      type: 'FETCH_FAILED',
      fetchError: error,
    });
  }
};

export const GetReservedProps = () => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .get(`${BASE}/user/reserved`, {
        headers: {
          Authorization: token,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        dispatch({
          type: 'FETCH_RESERVED_PROPERTIES_SUCCESS',
          payload: {
            reserved_houses: response.data,
            // reserved_lands: response.data.land,
          },
        });
      });
  } catch (error) {
    console.log(error, 'err');
    dispatch({
      type: 'FETCH_FAILED',
      fetchError: error,
    });
  }
};
