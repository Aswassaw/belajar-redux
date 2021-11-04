import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const middlewares = [reduxLogger, reduxThunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
