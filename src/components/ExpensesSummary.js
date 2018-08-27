import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expensesCount = props.expenses.length;
    const expensesTotal = expensesCount === 0 ? 0 : selectExpensesTotal(props.expenses);
    return (
        <div>
            <h2>Viewing {expensesCount} expense(s) totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h2>
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);