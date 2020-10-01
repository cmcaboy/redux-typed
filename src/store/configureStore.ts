import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  expenses: expensesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
