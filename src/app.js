import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();

//console.log(store.getState());
//store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: -100000 }));
//store.dispatch(addExpense({ description: 'Gas bill', amount: 3000, createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));