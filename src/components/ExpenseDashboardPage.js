import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import myImg from '../assets/images/46035.jpg';

const ExpenseDashboardPage = () => (
    <div>
        <img src={myImg} width='auto'/>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;