import firebase from "firebase";
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SENT,
  LOGIN_SUCCESS,
  LOGIN_REJECTED,
  CREATE_ACCOUNT,
  ACCOUNT_NOT_CREATED,
} from "./actionTypes";

export const emailChangeAction = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};
export const passwordChangeAction = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text,
  };
};

//async action creators
export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_SENT, payload: null });
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_REJECTED,
        payload: err,
      });
    }
  };
};

export const createAccount = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_SENT, payload: null });
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch({
        type: CREATE_ACCOUNT,
        payload: user,
      });
    } catch (err) {
      dispatch({
        type: ACCOUNT_NOT_CREATED,
        payload: err,
      });
    }
  };
};
