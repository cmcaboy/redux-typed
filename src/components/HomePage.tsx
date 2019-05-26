import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import expenses from "../reducers/expenses";

export class HomePage extends React.Component {
  onEdit = expense => {
    this.props.startEditExpense(expense);
  };
  onRemove = id => {
    this.props.startRemoveExpense(id);
  };
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: expense => dispatch(startEditExpense(expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
