import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
