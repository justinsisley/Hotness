import actions from '../constants/actions';
import appDispatcher from '../dispatchers/app.js';

const loginActions = {
  logIn(username, password) {
    appDispatcher.handleViewAction({
      actionType: actions.LOG_IN,
      credentials: {username, password},
    });
  },

  logOut() {
    appDispatcher.handleViewAction({
      actionType: actions.LOG_OUT,
    });
  },
};

export default loginActions;
