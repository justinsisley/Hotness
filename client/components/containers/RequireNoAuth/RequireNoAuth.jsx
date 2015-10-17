import React from 'react';
import {History} from 'react-router';
import {loginStore} from '../../../stores';

const RequireAuth = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  mixins: [History],

  componentWillMount() {
    // If the user is logged in, redirect them to the dashboard
    if (loginStore.loginState.loggedIn) {
      this.history.pushState(null, '/dashboard');
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
