import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_REJECTED,
  ACCOUNT_NOT_CREATED,
  CREATE_ACCOUNT,
  LOGIN_SENT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  err: "",
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_SENT:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        password: "",
        err: "",
        loading: false,
      };
    case LOGIN_REJECTED:
      return { ...state, err: action.payload, password: "", loading: false };
    case ACCOUNT_NOT_CREATED:
      return { ...state, err: action.payload, password: "", loading: false };
    case CREATE_ACCOUNT:
      return { ...state, user: action.payload, err: "", loading: false };
    default:
      return state;
  }
};
