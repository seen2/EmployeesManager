import { NAME_CHANGE, PHONE_CHANGE, SHIFT_CHANGE } from "./actionTypes";

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
