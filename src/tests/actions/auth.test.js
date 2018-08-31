import { login, startLogin, logout, startLogout } from '../../actions/auth';

describe('login', () => {
    test('should setup login action object correctly', () => {
        const uid = '123abc';
        const action = login(uid);
        expect(action).toEqual({
            type: 'LOGIN',
            uid
        });
    });
});

describe('logout', () => {
    test('should setup loout action object correctly', () => {
        const action = logout();
        expect(action).toEqual({
            type: 'LOGOUT'
        });
    });
});