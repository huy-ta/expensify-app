import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('expenses-total.js', () => {
    test('should return 0 if no expenses', () => {
        const res = selectExpensesTotal([]);
        expect(res).toBe(0);
    });
});

describe('expenses-total.js', () => {
    test('should correctly add up a single expense', () => {
        const res = selectExpensesTotal([expenses[0]]);
        expect(res).toBe(expenses[0].amount);
    });
});

describe('expenses-total.js', () => {
    test('should correctly add up multiple expenses', () => {
        const res = selectExpensesTotal(expenses);
        expect(res).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
    });
});