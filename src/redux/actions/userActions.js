import * as axios from 'axios';
import Session from '@utils/Session';
import {ToastAndroid} from 'react-native';

const showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
};
const BASE = 'https://api.spreadprolimited.com/api/';

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
    console.log('Error Occured');
    // ToastAndroid.show(
    //   'Error Occured',
    //   ToastAndroid.LONG,
    //   ToastAndroid.TOP,
    //   25,
    //   50,
    // );
  }
};
export default parseError;

export const CreateUser = (data, navigation, setLoad) => async (dispatch) => {
  try {
    await axios
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
    await setLoad(false);
  } catch (error) {
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    // showToast(error.message);
    parseError(error);
    setTimeout(() => {
      setLoad(false);
    }, 5000);
  }
};

export const Login = (data, navigation, setLoad) => async (dispatch) => {
  try {
    await axios
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
    await setLoad(false);
  } catch (error) {
    parseError(error);
    dispatch({
      type: 'USER_AUTH_ERROR',
      payload: error.message,
    });
    // if (
    //   error.message === 'Request failed with status code 400' ||
    //   'Request failed with status code 422'
    // ) {
    //   showToast('Credentials not correct');
    // } else {
    //   showToast(error.message);
    // }
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
        // console.log('got users');
        dispatch({
          type: 'USER_DATA',
          payload: {
            user: response.data.user,
          },
        });
      });
  } catch (error) {
    parseError(error);
    showToast(error.message);
    // Session.logout();
    // return 401;
  }
};
export const UpdateUserData = (data, setLoad) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
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
        // console.log(response, 'response.data.success');
        showToast('Profile Updated Successfully');
        dispatch({
          type: 'USER_DATA',
          payload: {
            user: response.data.user,
          },
        });
      });
    await setLoad(false);
  } catch (error) {
    // showToast(error.message);
    parseError(error);
  }
};

export const REQUEST_VERIFICATION = (email, setLoad) => async (dispatch) => {
  console.log(email);
  try {
    const token = await Session.getData('@token');
    await axios
      .post(
        'https://api.spreadprolimited.com/api/verify_account',
        {
          email: email,
        },
        {
          headers: {
            Authorization: token,
            'content-type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response, 'very');
        showToast('VERIFICATION MAIL SENT, CHECK YOUR INBOX');
      });
    await setLoad(false);
  } catch (error) {
    parseError(error);
    dispatch({
      type: 'REQUEST_VERIFICATION_ERROR',
      payload: error.message,
    });
  }
};

export const ForgotPassword = (email) => async (dispatch) => {
  try {
    const token = await Session.getData('@token');
    await axios
      .post(
        'https://api.spreadprolimited.com/api/forgot_password',
        {
          email: email,
        },
        {
          headers: {
            Authorization: token,
            'content-type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response, 'innn');
        dispatch({
          type: 'FORGOT_PASSWORD',
        });
      });
  } catch (error) {
    parseError(error);
    dispatch({
      type: 'FORGOT_PASSWORD_ERROR',
      payload: error.message,
    });
  }
    // Session.logout();
    // return 401;
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
