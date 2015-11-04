import actions from '../../actions';
import stores from '../../stores';

const authHelper = {
  requireAuth(nextState, replaceState) {
    if (!stores.loginStore.loginState.loggedIn) {
      replaceState(null, '/login');
    }
  },

  requireNoAuth(nextState, replaceState) {
    if (stores.loginStore.loginState.loggedIn) {
      replaceState(null, '/dashboard');
    }
  },

  logOut(nextState, replaceState, callback) {
    stores.loginStore.addChangeListener(() => {
      if (stores.loginStore.loginState.loggedIn) {
        replaceState(null, '/dashboard');
      } else {
        replaceState(null, '/login');
      }

      callback();
    });

    actions.loginActions.logOut();
  },
};

export default authHelper;
