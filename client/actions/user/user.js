import actions from '../../constants/actions';
import appDispatcher from '../../dispatchers/app.js';

const userActions = {
  getUsers() {
    appDispatcher.handleViewAction({
      actionType: actions.GET_USERS,
    });
  },

  getUser(userId) {
    appDispatcher.handleViewAction({
      actionType: actions.GET_USER,
      userId,
    });
  },
};

export default userActions;
