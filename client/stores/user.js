import {EventEmitter} from 'events';
import actions from '../constants/actions';
import appDispatcher from '../dispatchers/app';

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

    this.users = [];

    appDispatcher.register(payload => {
      const action = payload.action;

      switch (action.actionType) {
      case actions.GET_USERS:
        this.getUsers();
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
  getUsers() {
    this.users = [
      {name: 'Bill', id: 1},
      {name: 'Julie', id: 2},
      {name: 'Mark', id: 3},
      {name: 'Annie', id: 4},
      {name: 'Blaze', id: 5},
    ];

    this.emitChange();
  }
}

export default new UserStore();
