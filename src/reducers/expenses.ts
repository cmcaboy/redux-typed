import { ExpenseActionTypes } from "../types/actions";
import { Expense } from "../types/Expense";

const expensesReducerDefaultState: Expense[] = [];

export default (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense,
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};
