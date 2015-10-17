import React from 'react';
import stores from '../../../stores';
import actions from '../../../actions';

const User = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    params: React.PropTypes.shape({
      userId: React.PropTypes.string.isRequired,
    }).isRequired,
  },

  getInitialState() {
    return {
      user: {}
    };
  },

  componentDidMount() {
    stores.userStore.addChangeListener(this._userStoreChange);

    actions.userAction.getUser(this.props.params.userId);
  },

  componentWillUnmount() {
    stores.userStore.removeChangeListener(this._userStoreChange);
  },

  _userStoreChange() {
    this.setState({
      user: stores.userStore.user,
    });
  },

  render() {
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <p>{this.state.user.phone}</p>
        <p><a href={`mailto:${this.state.user.email}`}>{this.state.user.email}</a></p>
        <p><a href={`http://${this.state.user.website}`} target="_blank">{this.state.user.website}</a></p>
      </div>
    );
  },
});

export default User;
