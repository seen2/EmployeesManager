import {
  NAME_CHANGE,
  PHONE_CHANGE,
  SHIFT_CHANGE,
} from "../actions/actionTypes";

const INITIAL_STATE = { name: "", phone: "", shift: "" };

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case NAME_CHANGE:
      return { ...state, name: action.payload };
    case PHONE_CHANGE:
      return { ...state, phone: action.payload };
    case SHIFT_CHANGE:
      return { ...state, shift: action.payload };
    default:
      return state;
  }
};
