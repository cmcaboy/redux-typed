import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import expenses from "../reducers/expenses";

export class EditExpensePage extends React.Component {
  onEdit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
  };
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          <p>{expenses}</p>
          <button onClick={this.onRemove}>Remove Expense</button>
          <button onClick={this.onEdit}>Edit Expense</button>
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
