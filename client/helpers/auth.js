import {loginStore} from '../stores';

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
  }
};

export default authHelper;
