import test from 'tape';
import navActions from '../../../actions/user'
import navStore from '../user';

test('navStore#init', assert => {
  assert.plan(2);

  assert.equal(
    navStore.users instanceof Array,
    true,
    'Has a `users` getter that returns an array'
  );

  assert.equal(
    navStore.users.length,
    0,
    'Initializes with an empty "users" array'
  );
});

test('navStore#getUsers', assert => {
  assert.plan(2);

  navStore.addChangeListener(() => {
    assert.equal(
      navStore.users instanceof Array,
      true,
      'Updates the "users" array'
    );

    assert.equal(
      navStore.users.length,
      5,
      'The "users" array contains a list of users'
    );
  });

  navActions.getUsers();
});
