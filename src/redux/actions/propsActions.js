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
            properties: response.data.houses,
          },
        });
      });
  } catch (error) {
    console.log(error, 'err');
    dispatch({
      type: 'FETCH_PROPERTIES_FAILED',
      fetchError: error,
    });
  }
};
