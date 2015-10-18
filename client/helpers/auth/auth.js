import loginAction from '../../actions/login';
import {loginStore} from '../../stores';

const authHelper = {
  requireAuth(nextState, replaceState) {
    if (!loginStore.loginState.loggedIn) {
      replaceState(null, '/login');
    }
  },

  requireNoAuth(nextState, replaceState) {
    if (loginStore.loginState.loggedIn) {
      replaceState(null, '/dashboard');
    }
  },

  logOut(nextState, replaceState, callback) {
    loginStore.addChangeListener(() => {
      if (loginStore.loginState.loggedIn) {
        replaceState(null, '/dashboard');
      } else {
        replaceState(null, '/login');
      }

      callback();
    });

    loginAction.logOut();
  }
};

export default authHelper;
