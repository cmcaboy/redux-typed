import uuid from "uuid";
import { Expense } from "../types/Expense";
import {
  ADD_EXPENSE,
  AppActions,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const addExpense = (expense: Expense): AppActions => ({
  type: ADD_EXPENSE,
  expense
});

export const removeExpense = (id: string): AppActions => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (expense: Expense): AppActions => ({
  type: EDIT_EXPENSE,
  expense
});

export const setExpenses = (expenses: Expense[]): AppActions => ({
  type: SET_EXPENSES,
  expenses
});

export const startAddExpense = (expenseData: {
  description?: string;
  note?: string;
  amount?: number;
  createdAt?: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    return dispatch(
      addExpense({
        id,
        ...expense
      })
    );
  };
};

export const startRemoveExpense = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (expense: Expense) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editExpense(expense));
  };
};

export const startSetExpenses = (expenses: Expense[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setExpenses(expenses));
  };
};
