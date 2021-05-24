import config from "../../assets/config";

const { SET_FAVORITE, SET_NEW_COMIC } = config.actions;

export const comics = (state = { list: [] }, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      console.log("favorite");
      let comics = [...state.list];
      let selected = comics[action.payload.index];
      selected = { ...selected, rating: action.payload.rating };
      comics[action.payload.index] = selected;
      return { ...state, list: comics };
    case SET_NEW_COMIC:
      let list = [...state.list];
      list.push(action.payload);
      return { ...state, list };
    default:
      return state;
  }
};
