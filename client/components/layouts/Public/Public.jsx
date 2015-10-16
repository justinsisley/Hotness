import React from 'react';
import modules from '../../modules';

const Public = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  componentWillMount() {
    console.log('Showing the public layout...');
  },

  _getNavItems() {
    return [
      {title: 'Home', path: '/'},
      {title: 'About', path: '/about'},
      {title: 'Signup', path: '/signup'},
      {title: 'Login', path: '/login'},
    ];
  },

  render() {
    return (
      <div>
        <modules.Nav items={this._getNavItems()} />

        {this.props.children}
      </div>
    );
  },
});

export default Public;
