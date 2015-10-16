import {EventEmitter} from 'events';
import actions from '../constants/actions';
import appDispatcher from '../dispatchers/app';

const CHANGE_EVENT = 'change';

/**
 * LoginStore is used to keep the state of the currently logged-in user.
 * As with all stores, it is intended to be used as a singleton, and the
 * module itself returns an instance of the store.
 */
class LoginStore extends EventEmitter {
  /**
   * Calls `super()` to extend `EventEmitter`, configures initial state,
   * and registers a callback with the app dispatcher.
   */
  constructor() {
    super();

    this.state = this._getInitialState();

    appDispatcher.register(payload => {
      const action = payload.action;

      switch (action.actionType) {
      case actions.LOG_IN:
        this.logIn(action.credentials);
        break;

      case actions.LOG_OUT:
        this.logOut();
        break;

      default:
        // no-op
      }
    });
  }

  /**
   * Gets an object representing the initial state of the store.
   * The initial state is a logged-out user with no errors and no user data.
   * @return {object} The default state of the store.
   */
  _getInitialState() {
    return {
      loggedIn: false,
      error: '',
      user: {
        username: '',
      },
    };
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
   * Logic used to log a user in.
   * @param  {object} credentials An object containing `username` and
   * `password` properties.
   */
  logIn(credentials) {
    const {username, password} = credentials;

    if (username === 'user' && password === 'password') {
      this.state.error = '';
      this.state.loggedIn = true;
      this.state.user.username = username;
    } else {
      this.state.error = 'Incorrect username or password';
    }

    this.emitChange();
  }

  /**
   * Logic used to log a user out. Just resets the state.
   */
  logOut() {
    this.state = this._getInitialState();

    this.emitChange();
  }

  /**
   * Provide a simplified version of the state to determine if the user is
   * logged in.
   * @return {object} An object containing a boolean, `loggedIn`, and a string,
   * `error`. `error` may be empty if there were no errors during login.
   */
  get loginState() {
    const {loggedIn, error} = this.state;

    return {loggedIn, error};
  }

  /**
   * Provide the user data.
   * @return {object} An object representing the user.
   */
  get userData() {
    return this.state.user;
  }
}

export default new LoginStore();
