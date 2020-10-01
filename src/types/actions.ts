import { Expense } from "./Expense";

export const ADD_EXPENSE = "ADD_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const SET_EXPENSES = "SET_EXPENSES";

export interface SetExpensesAction {
  type: typeof SET_EXPENSES;
  expenses: Expense[];
}

export interface EditExpensesAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpensesAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface AddExpensesAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

/***______ Aggregate all the possible types of actions for expenses and export ______*/
export type ExpenseActionTypes =
  | SetExpensesAction
  | EditExpensesAction
  | AddExpensesAction
  | RemoveExpensesAction;

/****_____ Export all Actions for the App and export  _____*/
export type AppActions = ExpenseActionTypes;
