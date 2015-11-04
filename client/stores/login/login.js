import {EventEmitter} from 'events';
import actions from '../../constants/actions';
import appDispatcher from '../../dispatchers/app';

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

    // Set the initial state
    this._resetState();

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
    this.addListener(CHANGE_EVENT, callback);
  }

  /**
   * Stop listening for a change event on this store.
   * @param  {Function} callback Function to call when a change event occurs.
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * Reset the state to its initial values
   */
  _resetState() {
    this._loggedIn = false;
    this._error = '';
    this._user = {};
  }

  /**
   * Logic used to log a user in.
   * @param  {object} credentials An object containing `username` and
   * `password` properties.
   */
  logIn(credentials) {
    const {username, password} = credentials;

    if (username === 'test@test.com' && password === 'test') {
      this._loggedIn = true;
      this._error = '';
      this._user.username = username;
    } else {
      this._error = 'Incorrect username or password';
    }

    this.emitChange();
  }

  /**
   * Logic used to log a user out. Just resets the state.
   */
  logOut() {
    this._resetState();

    this.emitChange();
  }

  /**
   * Provide a simplified version of the state to determine if the user is
   * logged in.
   * @return {object} An object containing a boolean, `loggedIn`, and a string,
   * `error`. `error` may be empty if there were no errors during login.
   */
  get loginState() {
    return {
      loggedIn: this._loggedIn,
      error: this._error,
    };
  }

  /**
   * Provide the user data.
   * @return {object} An object representing the user.
   */
  get userData() {
    return this._user;
  }
}

export default new LoginStore();
