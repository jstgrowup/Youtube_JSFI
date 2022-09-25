import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./Everything/user.Reducer";
const rootreducer = combineReducers({
  users: usersReducer,
});
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
