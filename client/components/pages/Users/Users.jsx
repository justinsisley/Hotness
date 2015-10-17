import React from 'react';
import {Link} from 'react-router';
import stores from '../../../stores';
import actions from '../../../actions';

const Users = React.createClass({
  getInitialState() {
    return {
      users: [],
    };
  },

  componentDidMount() {
    stores.userStore.addChangeListener(this._userStoreChange);

    actions.userAction.getUsers();
  },

  componentWillUnmount() {
    stores.userStore.removeChangeListener(this._userStoreChange);
  },

  _userStoreChange() {
    this.setState({
      users: stores.userStore.users,
    });
  },

  render() {
    return (
      <div>
        <h1>All Users</h1>

        <ul>
          {this.state.users.map(user => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
});

export default Users;
