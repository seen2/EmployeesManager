import { combineReducers } from "redux";

import AuthReducer from "./authReducer";
import AddEmployeeReducer from "./addEmployeeReducer";
import FetchEmployeessReducer from "./fetchEmployeesReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  employee: AddEmployeeReducer,
  employeeList: FetchEmployeessReducer,
});

export default reducers;
