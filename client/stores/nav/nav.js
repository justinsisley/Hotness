// getLoggedInNavItems
// getLoggedOutNavItems


import {EventEmitter} from 'events';
import fetch from 'isomorphic-fetch';
import actions from '../../constants/actions';
import appDispatcher from '../../dispatchers/app';

const CHANGE_EVENT = 'change';

/**
 * UserStore contains a list of all other users.
 * As with all stores, it is intended to be used as a singleton, and the
 * module itself returns an instance of the store.
 */
class UserStore extends EventEmitter {
  /**
   * Calls `super()` to extend `EventEmitter`, configures initial state,
   * and registers a callback with the app dispatcher.
   */
  constructor() {
    super();

    this._users = [];
    this._user = [];

    appDispatcher.register(payload => {
      const action = payload.action;

      switch (action.actionType) {
      case actions.GET_USERS:
        this._getUsers();
        break;

      case actions.GET_USER:
        this._getUser(action.userId);
        break;

      default:
        // no-op
      }
    });
  }

  /**
   * Emit a change using `EventEmitter`
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * Listen for a change event on this store.
   * @param {Function} callback Function to call when a change event occurs.
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * Stop listening for a change event on this store.
   * @param  {Function} callback Function to call when a change event occurs.
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * Logic used to get the list of users and update the store's state.
   */
  _getUsers() {
    fetch('/api/users')
    .then(response => response.json())
    .then(users => {
      this._users = users;

      this.emitChange();
    });
  }

  /**
   * Logic used to get a single user's data and update the store's state.
   */
  _getUser(userId) {
    fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      this._user = user;

      this.emitChange();
    });
  }

  /**
   * Provide the users list data.
   * @return {array} An array of users.
   */
  get users() {
    return this._users;
  }

  /**
   * Provide the user detail data.
   * @return {object} A user object.
   */
  get user() {
    return this._user;
  }
}

export default new UserStore();
