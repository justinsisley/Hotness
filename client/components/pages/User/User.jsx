import React from 'react';

const User = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.shape({
      userId: React.PropTypes.string.isRequired,
    }).isRequired,
  },

  render() {
    return (
      <div>
        <h1>User {this.props.params.userId}</h1>

        {this.props.children}
      </div>
    );
  },
});

export default User;
