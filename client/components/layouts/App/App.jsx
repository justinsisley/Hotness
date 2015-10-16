import React from 'react';
import modules from '../../modules';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  componentWillMount() {
    console.log('Showing the app layout...');
  },

  _getNavItems() {
    return [
      {title: 'Home', path: '/'},
      {title: 'About', path: '/about'},
      {title: 'Dashboard', path: '/dashboard'},
      {title: 'Users', path: '/users'},
      {title: 'Styleguide', path: '/styleguide'},
      {title: 'Logout', path: '/logout'},
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

export default App;
