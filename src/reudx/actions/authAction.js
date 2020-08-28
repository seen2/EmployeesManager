import firebase from "firebase";
import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_SUCCESS } from "./actionTypes";

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
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } catch (err) {}
  };
};
