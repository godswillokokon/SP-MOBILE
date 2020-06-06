import * as axios from 'axios';
import Session from '@utils/Session';
import SupportHeader from '@utils/SupportHeader';

export const Login = (email, password, navigation) => async (dispatch) => {
  try {
    await axios
      .post(
        `https://Spreadprolimited.com/api/user/login?email=${email}&password=${password}`,
      )
      .then((response) => {
        // console.log(response, 'all');
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
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    console.log('ERR', error.message);
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
  } catch (e) {
    console.log('no user found');
    // toast.error("Error Notification !");
    Session.logout();
    return 401;
  }
};
