import { combineReducers, createStore } from "redux";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
