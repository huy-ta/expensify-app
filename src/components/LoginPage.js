import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import googleIcon from '../assets/images/google.svg';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
    <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <div>
            <button className="box-layout__button" onClick={startLogin}>
                <img className="box-layout__icon" src={googleIcon} width='32' />
                Login with Google
            </button>
        </div>
    </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);