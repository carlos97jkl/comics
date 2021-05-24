import config from "../../assets/config";

const { SET_FAVORITE } = config.actions;

export const setScorecomic = (index, rating) => (dispatch, getState) => {
  return dispatch({
    type: SET_FAVORITE,
    payload: { index, rating },
  });
};
