import Axios from "axios";
export const getData = (url, type) => async (dispatch, getState) => {
  try {
    const res = await Axios.get(url, {});
    console.log(res.data);
    return dispatch({
      type: type,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
