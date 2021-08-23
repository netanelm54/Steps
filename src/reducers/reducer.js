import { combineReducers } from "redux";

const initialState = [];

export const comments = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  comments
});

export default reducer;
