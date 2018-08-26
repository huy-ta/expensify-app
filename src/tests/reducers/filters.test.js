import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('filtersReducer', () => {
    test('should setup default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });
});

describe('filtersReducer', () => {
    test('should set sortBy to amount', () => {
        const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
        expect(state.sortBy).toEqual('amount');
    });
});

describe('filtersReducer', () => {
    test('should set sortBy to date', () => {
        const currentState = {
            text: '',
            startDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
        };
        const action = { type: 'SORT_BY_DATE' };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toEqual('date');
    });
});

describe('filtersReducer', () => {
    test('should set text filter', () => {
        const text = 'Something';
        const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
        expect(state.text).toEqual(text);
    });
});

describe('filtersReducer', () => {
    test('should set startDate', () => {
        const startDate = moment();
        const action = { type: 'SET_START_DATE', startDate };
        const state = filtersReducer(undefined, action);
        expect(state.startDate).toEqual(startDate);
    });
});

describe('filtersReducer', () => {
    test('should set endDate', () => {
        const endDate = moment();
        const action = { type: 'SET_END_DATE', endDate };
        const state = filtersReducer(undefined, action);
        expect(state.endDate).toEqual(endDate);
    });
});