import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import itemReducer from "./../src/components/reducer";

const rootReducer = combineReducers({
  items: itemReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
