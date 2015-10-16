import actions from '../constants/actions';
import appDispatcher from '../dispatchers/app.js';

const userActions = {
  getUsers() {
    appDispatcher.handleViewAction({
      actionType: actions.GET_USERS,
    });
  },
};

export default userActions;
