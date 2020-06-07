import * as axios from 'axios';
import Session from '@utils/Session';
import {ToastAndroid} from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
};
const BASE = 'https://Spreadprolimited.com/api';
export const CreateUser = (data, navigation, setLoad) => async (dispatch) => {
  const {email, name, password, password_confirmation, dob, phone} = data;

  try {
    console.log(data, 'in');
    await axios
      .post(
        `${BASE}/user?email=${email}&name=${name}&dob=${dob}&phone=${phone}&password=${password}&password_confirmation=${password_confirmation}`,
      )
      .then((response) => {
        console.log(response, 'res');
        const value = `Bearer ${response.data.token}`;
        const saveToken = Session.saveToken(value);
        if (saveToken) {
          navigation.navigate('Home');
          dispatch({
            type: 'USER_CREATE_ACCOUNT_SUCCESS',
            payload: {
              token: response.data.token,
              user: response.data.user,
              createResponse: response.data,
            },
          });
        }
      });
    setLoad(false);
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    showToast(error.message);
    console.log(error)
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }
};

export const Login = (data, navigation, setLoad) => async (dispatch) => {
  const {email, password} = data;
  try {
    await axios
      .post(`${BASE}/user/login?email=${email}&password=${password}`)
      .then((response) => {
        console.log(response, 'res');

        const value = `Bearer ${response.data.access_token}`;
        const saveToken = Session.saveToken(value);
        if (saveToken) {
          navigation.navigate('Home');
          dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: {
              token: response.data.access_token,
            },
          });
        }
      });
    setLoad(false);
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    showToast(error.message);
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
