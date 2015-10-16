import React from 'react';
import './App.css';

const RequireAuth = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  componentWillMount() {
    console.log('Bootstrapping the app...');
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
