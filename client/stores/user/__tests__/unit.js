import test from 'tape';
import userActions from '../../../actions/user'
import userStore from '../user';

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

  userActions.getUsers();
});
