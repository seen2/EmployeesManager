import { EMAIL_CHANGE, PASSWORD_CHANGE } from "../actions/actionTypes";

const INITIAL_STATE = { email: "", password: "" };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
