import authReducer from '../../reducers/auth';

describe('authReducer', () => {
    test('should setup default state', () => {
        const state = authReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual({});
    });
});

describe('authReducer', () => {
    test('should set uid for login', () => {
        const action = {
            type: 'LOGIN',
            uid: '123abc'
        };
        const state = authReducer({}, action);
        expect(state.uid).toBe(action.uid);
    });
});

describe('authReducer', () => {
    test('should clear uid for logout', () => {
        const action = {
            type: 'LOGOUT',
        };
        const state = authReducer({ uid: 'anything' }, action);
        expect(state).toEqual({});
    });
});
