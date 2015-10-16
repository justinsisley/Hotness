import React from 'react';
import {History} from 'react-router';
import assignValue from 'react-assign';
import stores from '../../../stores';
import actions from '../../../actions';
import elements from '../../elements';
import styles from './Login.css';

const Login = React.createClass({
  mixins: [History],

  getInitialState() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },

  componentDidMount() {
    stores.loginStore.addChangeListener(this._loginStoreChange);
  },

  componentWillUnmount() {
    stores.loginStore.removeChangeListener(this._loginStoreChange);
  },

  _onSubmit() {
    const {username, password} = this.state;

    actions.loginAction.logIn(username, password);
  },

  _loginStoreChange() {
    const loginState = stores.loginStore.loginState;

    if (loginState.loggedIn) {
      this.history.pushState(null, '/dashboard');
    } else {
      this.setState({
        error: loginState.error,
      });
    }
  },

  _onKeyDown(event) {
    if (event.which === 13) {
      this._onSubmit();
    }
  },

  render() {
    let error = null;
    if (this.state.error) {
      error = <p className={styles.error}>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>Login</h1>

        <elements.Input
          type="email"
          placeholder="Email"
          onKeyDown={this._onKeyDown}
          onChange={assignValue(this, 'username')} />

        <elements.Input
          type="password"
          placeholder="Password"
          onKeyDown={this._onKeyDown}
          onChange={assignValue(this, 'password')} />

        <elements.Button
          onClick={this._onSubmit}>Log In</elements.Button>

        {error}
      </div>
    );
  },
});

export default Login;
