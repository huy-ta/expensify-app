import uuid from 'uuid';
import database from '../firebase/firebase';

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

const startAddExpense = (expenseData = {}) => { // after integrating redux-thunk, this can work
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData; // destructuring
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const startRemoveExpense = ({ id }) => { 
    return (dispatch) => database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
    });
};

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

const startSetExpenses = () => {
    return (dispatch) => database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setExpenses(expenses));
    });
};

export { addExpense, startAddExpense, removeExpense, startRemoveExpense, editExpense, setExpenses, startSetExpenses };