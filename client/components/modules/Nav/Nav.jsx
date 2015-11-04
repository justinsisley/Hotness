import React from 'react';
import {Link, IndexLink} from 'react-router';
import styles from './Nav.css';

const Nav = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  getLink(navItem) {
    const {path, title} = navItem;

    if (path === '/') {
      return (
        <IndexLink
          to={path}
          className={styles.link}
          activeClassName="active">{title}</IndexLink>
      );
    }

    return (
      <Link
        to={path}
        className={styles.link}
        activeClassName="active">{title}</Link>
    );
  },

  render() {
    return (
      <ul className={styles.list}>
        {this.props.items.map(navItem => {
          return (
            <li key={navItem.title} className={styles.listItem}>
              {this.getLink(navItem)}
            </li>
          );
        })}
      </ul>
    );
  },
});

export default Nav;
