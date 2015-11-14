import test from 'tape';
import userAction from '../../../actions/user/user';
import userStore from '../user';

let originalGetUsers = userStore._getUsers;
function mockGetUsers() {
  userStore._getUsers = () => {
    // TODO: user fixture data
    userStore._users = [{}, {}, {}, {}, {}];
    userStore.emitChange();
  };
}
function restoreGetUsers() {
  userStore._getUsers = originalGetUsers;
}

test('userStore#init', assert => {
  assert.plan(2);

  assert.equal(
    userStore.users instanceof Array,
    true,
    'Has a `users` getter that returns an array'
  );

  assert.equal(
    userStore.users.length,
    0,
    'Initializes with an empty "users" array'
  );
});

test('userStore#getUsers', assert => {
  mockGetUsers();

  assert.plan(2);

  userStore.addChangeListener(() => {
    assert.equal(
      userStore.users instanceof Array,
      true,
      'Updates the "users" array'
    );

    assert.equal(
      userStore.users.length,
      5,
      'The "users" array contains a list of users'
    );
  });

  userAction.getUsers();
});

test('userStore#getUser')