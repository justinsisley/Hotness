import React from 'react';
import styles from './Input.css';

const Input = React.createClass({
  render() {
    return (
      <input {...this.props} className={styles.input} />
    );
  },
});

export default Input;
