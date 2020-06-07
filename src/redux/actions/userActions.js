import * as axios from 'axios';
import Session from '@utils/Session';
import {ToastAndroid} from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(
    message,
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    // ToastAndroid.BOTTOM,
    25,
    50,
  );
};
export const Login = (email, password, navigation, setLoad) => async (
  dispatch,
) => {
  try {
    await axios
      .post(
        `https://Spreadprolimited.com/api/user/login?email=${email}&password=${password}`,
      )
      .then((response) => {
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
      .get('https://Spreadprolimited.com/api/profile', {
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
