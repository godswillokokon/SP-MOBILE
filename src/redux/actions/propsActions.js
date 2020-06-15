import * as axios from 'axios';

const BASE = 'https://Spreadprolimited.com/api';

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
    await axios
      .get(`${BASE}/user/house/${slug}`, {
        headers: {
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
