/**
 * NavStore contains a list of nav items for both the logged-out and
 * logged-in layouts.
 * It's not a normal store in the sense that it's never manipulate. It just
 * holds some static data and provides a couple of getters.
 */
class NavStore {
  /**
   * Calls `super()` to extend `EventEmitter`, configures initial state,
   * and registers a callback with the app dispatcher.
   */
  constructor() {
    this._publicNavItems = [
      {title: 'Home', path: '/'},
      {title: 'About', path: '/about'},
      {title: 'Signup', path: '/signup'},
      {title: 'Login', path: '/login'},
    ];

    this._appNavItems = [
      {title: 'Home', path: '/'},
      {title: 'About', path: '/about'},
      {title: 'Dashboard', path: '/dashboard'},
      {title: 'Users', path: '/users'},
      {title: 'Styleguide', path: '/styleguide'},
      {title: 'Logout', path: '/logout'},
    ];
  }

  /**
   * Provide the public nav items
   * @return {array} An array of nav items.
   */
  get publicNavItems() {
    return this._publicNavItems;
  }

  /**
   * Provide the app nav items
   * @return {array} An array of nav items.
   */
  get appNavItems() {
    return this._appNavItems;
  }
}

export default new NavStore();
