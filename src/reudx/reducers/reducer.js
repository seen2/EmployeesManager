import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import EmployeeReducer from "./employeeReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
});

export default reducers;
