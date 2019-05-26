import uuid from "uuid";

export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const removeExpense = id => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = expense => ({
  type: "EDIT_EXPENSE",
  expense
});

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startAddExpense = ({ description, note, amount, createdAt }) => {
  return (dispatch, getState) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    dispatch(
      addExpense({
        id,
        ...expense
      })
    );
  };
};

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    dispatch(removeExpense({ id }));
  };
};

export const startEditExpense = expense => {
  return (dispatch, getState) => {
    dispatch(editExpense(id, updates));
  };
};

export const startSetExpenses = expenses => {
  //console.log(database);
  return (dispatch, getState) => {
    dispatch(setExpenses(expenses));
  };
};
