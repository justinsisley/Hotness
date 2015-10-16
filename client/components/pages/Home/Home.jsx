import React from 'react';
import fetch from 'isomorphic-fetch';

const Home = React.createClass({
  getInitialState() {
    return {
      name: 'React with Webpack',
    };
  },

  componentDidMount() {
    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
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
