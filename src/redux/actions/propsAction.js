import * as axios from 'axios';
import Session from '@utils/Session';
import {ToastAndroid} from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
};
const BASE = 'https://Spreadprolimited.com/api';

export const Houses = (navigation, setLoad) => async (dispatch) => {
  try {
    await axios.post(`${BASE}/houses`).then((response) => {
      console.log(response, 'res');
      const value = `Bearer ${response.data.access_token}`;
      const saveToken = Session.saveToken(value);
      if (saveToken) {
        navigation.navigate('Home');
        dispatch({
          type: 'FETCH_PROPERTIES_SUCCESS',
          payload: {
            token: response.data.access_token,
          },
        });
      }
    });
    setLoad(false);
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'FETCH_PROPERTIES_FAILED',
      payload: error,
    });
    showToast(error);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }
};

export const GetUserData = () => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .get(`${BASE}/profile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.user, 'innn');
        dispatch({
          type: 'USER_DATA',
          payload: {
            user: response.data.user,
          },
        });
      });
  } catch (error) {
    showToast(error.message);
    // toast.error("Error Notification !");
    Session.logout();
    return 401;
  }
};

export const Logout = (props) => (dispatch) => {
  Session.saveToken(null);
  dispatch({
    type: 'USER_LOGOUT_SUCCES',
    payload: {
      token: null,
      user: {},
    },
  });
  props.navigation.navigate('Login');
};
