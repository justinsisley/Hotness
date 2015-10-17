import React from 'react';
import {History} from 'react-router';
import loginAction from '../../../actions/login';
import {loginStore} from '../../../stores';

const Logout = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  mixins: [History],

  componentDidMount() {
    loginStore.addChangeListener(this._loginStoreChange);

    loginAction.logOut();
  },

  componentWillUnmount() {
    loginStore.removeChangeListener(this._loginStoreChange);
  },

  _loginStoreChange() {
    if (loginStore.loginState.loggedIn) {
      this.history.pushState(null, '/dashboard');
    } else {
      this.history.pushState(null, '/login');
    }
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});

export default Logout;
