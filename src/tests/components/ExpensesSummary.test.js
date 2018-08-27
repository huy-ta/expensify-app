import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

describe('ExpensesSummary', () => {
    test('should render ExpensesSummary correctly with no expense', () => {
        const wrapper = shallow(<ExpensesSummary expenses={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ExpensesSummary', () => {
    test('should render ExpensesSummary correctly with one expense', () => {
        const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ExpensesSummary', () => {
    test('should render ExpensesSummary correctly with multiple expenses', () => {
        const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
        expect(wrapper).toMatchSnapshot();
    });
});