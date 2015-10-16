import React from 'react';
import {History} from 'react-router';
import loginStore from '../../../stores/login';

const RequireAuth = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  mixins: [History],

  componentWillMount() {
    // If the user is not logged in, redirect them to the login page
    if (!loginStore.loginState.loggedIn) {
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

export default RequireAuth;
