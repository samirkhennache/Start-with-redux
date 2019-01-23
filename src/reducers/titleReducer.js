import * as types from "../actions/types";

const initialState = {
  resultTitle: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TITLE:
      return { ...state, resultTitle: action.payload };
    default:
      return state;
  }
};
