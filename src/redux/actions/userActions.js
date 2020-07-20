import * as axios from 'axios';
import Session from '@utils/Session';
import {ToastAndroid} from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
};
const BASE = 'https://api.spreadprolimited.com/api/';

export const CreateUser = (data, navigation, setLoad) => (dispatch) => {
  try {
    axios
      .post(
        'https://api.spreadprolimited.com/api/user',
        {
          name: data.name,
          email: data.email,
          dob: data.dob,
          phone: data.phone,
          address: data.address,
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response, 'new user');
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
    console.log(error);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }
};

export const Login = (data, navigation, setLoad) => async (dispatch) => {
  try {
    axios
      .post(
        'https://api.spreadprolimited.com/api/user/login',
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        },
      )
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
    console.log(error);
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    if (
      error.message === 'Request failed with status code 400' ||
      'Request failed with status code 422'
    ) {
      showToast('Credentials not correct');
    } else {
      showToast(error.message);
    }
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }
};

export const GetUserData = () => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .get('https://api.spreadprolimited.com/api/profile', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch({
          type: 'USER_DATA',
          payload: {
            user: response.data.user,
          },
        });
      });
  } catch (error) {
    showToast(error.message);
    Session.logout();
    return 401;
  }
};
export const UpdateUserData = (data, setLoad) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    axios
      .post(
        'https://api.spreadprolimited.com/api/user',
        {
          name: data.name,
          email: data.email,
          dob: data.dob,
          phone: data.phone,
          address: data.address,
          picture: data.picture,
          _method: 'PATCH',
        },
        {
          headers: {
            Authorization: token,
            'content-type': 'application/json',
          },
        },
      )
      .then(function (response) {
        // console.log(response, 'innn');
        dispatch({
          type: 'USER_DATA',
          payload: {
            user: response.data.user,
          },
        });
      });
    setLoad(false);
  } catch (error) {
    showToast(error.message);
    console.log(error.message, 'redux error');
    console.log(error, 'redux error');
  }
};
export const ForgotPassword = (email) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .get(`${BASE}/profile`, {
        headers: {
          Authorization: token,
          email,
        },
      })
      .then((response) => {
        // console.log(response.data.user, 'innn');
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
    type: 'USER_LOGOUT_SUCCESS',
    payload: {
      token: null,
      user: {},
    },
  });
  props.navigation.navigate('Login');
};
// const url = 'https://api.spreadprolimited.com/api/user/login';
// const options = {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     email: data.email,
//     password: data.password,
//   }),
// };
