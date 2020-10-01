import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import expenses from "../reducers/expenses";
import { AppState } from "../store/configureStore";
import { AppActions } from "../types/actions";
import { Expense } from "../types/Expense";

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageStates {}

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

export class HomePage extends React.Component<Props, HomePageStates> {
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map((expense) => (
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

interface LinkStateProps {
  expenses: Expense[];
}

interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
