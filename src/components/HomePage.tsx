import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
  };
  render() {
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button onClick={this.onRemove}>Remove Expense</button>
          <button onClick={this.onAdd}>Edit Expense</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
