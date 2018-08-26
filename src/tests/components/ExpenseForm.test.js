import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

describe('ExpenseForm', () => {
    test('should render ExpenseForm correctly', () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ExpenseForm', () => {
    test('should render ExpenseForm with expense data correctly', () => {
        const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ExpenseForm', () => {
    test('should render error for invalid form submission', () => {
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot(); // a snapshot before error
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        expect(wrapper.state('error').length).toBeGreaterThan(0);
        expect(wrapper).toMatchSnapshot(); // a snapshot after error
        // You can have as many snapshots in a test as you want
    });
});

describe('ExpenseForm', () => {
    test('should set description on input change', () => {
        const value = 'New description';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at(0).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('description')).toBe(value);
    });
});

describe('ExpenseForm', () => {
    test('should set note on textarea change', () => {
        const value = 'New note';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('textarea').at(0).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('note')).toBe(value);
    });
});

describe('ExpenseForm', () => {
    test('should set amount if valid input', () => {
        const value = '23.50';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at(1).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('amount')).toBe(value);
    });
});

describe('ExpenseForm', () => {
    test('should set amount if invalid input', () => {
        const value = '12.122';
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at(1).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('amount')).toBe('');
    });
});

describe('ExpenseForm', () => {
    test('should call onSubmit props for valid form submission', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });
        expect(wrapper.state('error')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
            description: expenses[0].description,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt,
            note: expenses[0].note
        });
    });
});

describe('ExpenseForm', () => {
    test('should set new date on date change', () => {
        const now = moment();
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find(SingleDatePicker).prop('onDateChange')(now);
        expect(wrapper.state('createdAt')).toBe(now);
    });
});

describe('ExpenseForm', () => {
    test('should set calendar focused on focus change', () => {
        const focused = true;
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
        expect(wrapper.state('calendarFocused')).toBe(focused);
    });
});