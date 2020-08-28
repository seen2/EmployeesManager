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
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_SENT:
      return { ...state, ...INITIAL_STATE, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_REJECTED:
      return { ...state, ...INITIAL_STATE, err: action.payload };
    case ACCOUNT_NOT_CREATED:
      return { ...state, ...INITIAL_STATE, err: action.payload };
    case CREATE_ACCOUNT:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};
