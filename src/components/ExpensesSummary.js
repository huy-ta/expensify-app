import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expensesCount = props.expenses.length;
    const expensesTotal = expensesCount === 0 ? 0 : selectExpensesTotal(props.expenses);
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Viewing <strong>{expensesCount}</strong> expense(s) totalling <strong>{numeral(expensesTotal / 100).format('$0,0.00')}</strong></h2>
                <div className="page_header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);