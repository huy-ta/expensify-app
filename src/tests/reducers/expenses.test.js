import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

describe('expensesReducer', () => {
    test('should setup default state', () => {
        const state = expensesReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual([]);
    });
});

describe('expensesReducer', () => {
    test('should remove expense by id', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[0], expenses[2]]);
    });
});

describe('expensesReducer', () => {
    test('should not remove expense if id not found', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: '-1'
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });
});

describe('expensesReducer', () => {
    test('should add expense', () => {
        const expense = {
            id: '4',
            description: 'Electricity Bill',
            amount: 4500,
            note: '',
            createdAt: moment()
        };
        const action = {
            type: 'ADD_EXPENSE',
            expense
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([...expenses, expense]);
    });
});

describe('expensesReducer', () => {
    test('should edit expense', () => {
        const note = 'Whatever';
        const action = {
            type: 'EDIT_EXPENSE',
            id: expenses[1].id,
            updates: {
                note
            }
        };
        const state = expensesReducer(expenses, action);
        expect(state[1].note).toBe(note);
    });
});

describe('expensesReducer', () => {
    test('should not edit expense if id not found', () => {
        const action = {
            type: 'EDIT_EXPENSE',
            id: '-1',
            updates: {}
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });
});

describe('expensesReducer', () => {
    test('should set expenses', () => {
        const action = {
            type: 'SET_EXPENSES',
            expenses: [expenses[1]]
        };
        const state = expensesReducer(expenses, action); // equivalent to dispatch
        expect(state).toEqual([expenses[1]]);
    });
});