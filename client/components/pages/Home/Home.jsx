import React from 'react';

const Home = React.createClass({
  getInitialState() {
    return {
      name: 'React with Webpack',
    };
  },

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  },
});

export default Home;
