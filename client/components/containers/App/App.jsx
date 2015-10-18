import React from 'react';
import './App.css';

const RequireAuth = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
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
