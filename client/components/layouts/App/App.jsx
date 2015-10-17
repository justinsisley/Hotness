import React from 'react';
import modules from '../../modules';
import stores from '../../../stores';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {
      items: stores.navStore.appNavItems
    }
  },

  componentDidMount() {
    console.log('Showing the app layout...');
  },

  render() {
    return (
      <div>
        <modules.Nav items={this.state.items} />

        {this.props.children}
      </div>
    );
  },
});

export default App;
