import { createStore, applyMiddleware } from "redux";
import reduxthunk from "redux-thunk";

import reducers from "./reducers/reducer";

const store = createStore(reducers, {}, applyMiddleware(reduxthunk));
//(reducers,initialState,storeEnhancer)

export default store;
