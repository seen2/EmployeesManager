import firebase from "firebase";

import {
  NAME_CHANGE,
  PHONE_CHANGE,
  SHIFT_CHANGE,
  ADD_EMPLOYEE,
  EMPLOYEE_FETCH_SUCCESS,
} from "./actionTypes";

export const onNameChangeAction = (text) => {
  return {
    type: NAME_CHANGE,
    payload: text,
  };
};

export const onPhoneChangeAction = (text) => {
  return {
    type: PHONE_CHANGE,
    payload: text,
  };
};
export const onShiftChangeAction = (text) => {
  return {
    type: SHIFT_CHANGE,
    payload: text,
  };
};

//async action Creator

export const addEmployee = (employee) => {
  // console.log(employee);
  return async (dispatch) => {
    const { currentUser } = firebase.auth();
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push(employee);
    dispatch({ type: ADD_EMPLOYEE, payload: null });
  };
};

export const fetchEmployee = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", (snapshot) => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
