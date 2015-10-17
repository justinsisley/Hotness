import React from 'react';
import styles from './Button.css';

const Button = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  render() {
    return (
      <button {...this.props} className={styles.button}>
        {this.props.children}
      </button>
    );
  },
});

export default Button;
