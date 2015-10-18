import React from 'react';
import modules from '../../modules';
import stores from '../../../stores';

const Public = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {
      items: stores.navStore.publicNavItems
    }
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

export default Public;
