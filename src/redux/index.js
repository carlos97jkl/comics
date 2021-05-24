import { createStore, applyMiddleware } from "redux";
import { comics } from "./reducers/comics";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
let reducers = combineReducers({ comics });

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
