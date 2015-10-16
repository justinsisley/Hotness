import React from 'react';
import styles from './Button.css';

const Button = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  statics: {
    category: 'Elements',
    title: 'Button',
    description: 'You can use **Markdown** within this `description` field.',
    code: `<Button onClick={Function}>Cool Button</Button>`,
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
