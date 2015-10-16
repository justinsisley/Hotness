import {Dispatcher} from 'flux';

/**
 * The primary dispatcher for the application. As with all dispatchers, it is
 * intended to be used as a singleton, and the module itself returns an
 * instance of the dispatcher.
 */
class AppDispatcher extends Dispatcher {
  /**
   * Call `super()` to extend `Dispatcher`
   */
  constructor() {
    super();
  }

  /**
   * Dispatches view actions and adds a `source` property to distinguish this
   * from other action sources.
   * @param  {object} action The action object passed by the action itself.
   */
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action,
    });
  }
}

export default new AppDispatcher();
