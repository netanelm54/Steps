import { combineReducers } from "redux";

const initialState = {
  start: 1,
  limit: 20,
  comments: [],
};

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        start: action.meta.start,
        limit: action.meta.limit,
        comments: [...state.comments, ...action.payload],
      };

    case "POST_COMMENTS_SUCCESS":
      return state;

    case "POST_COMMENTS_ERROR":
      return state;

    default:
      return state;
  }
};

const reducer = combineReducers({
  comments,
});

export default reducer;
