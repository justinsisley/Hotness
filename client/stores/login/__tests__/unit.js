import test from 'tape';
import {loginAction} from '../../../actions';
import loginStore from '../login';

// Basic setup/tear-down performed before certain tests
function setup() {
  loginStore.removeAllListeners();
  loginStore._resetState();
}

test('loginStore#init', assert => {
  assert.plan(5);

  assert.equal(
    typeof loginStore.loginState,
    'object',
    'Has a `loginState` getter that returns an object'
  );

  assert.equal(
    typeof loginStore.userData,
    'object',
    'Has a `userData` getter that returns an object'
  );

  assert.equal(
    loginStore.loginState.loggedIn,
    false,
    'Has an initial `loggedIn` state of `false`'
  );

  assert.equal(
    loginStore.loginState.error,
    '',
    'Has an initial `error` state of empty string'
  );

  assert.equal(
    typeof loginStore.userData,
    'object',
    'Has an initial `user` state of empty object'
  );
});

test('loginStore#badCredentials', assert => {
  setup();

  assert.plan(3);

  loginStore.addChangeListener(() => {
    assert.equal(
      loginStore.loginState.error,
      'Incorrect username or password',
      'Updates the `error` state'
    );
  });

  loginAction.logIn();
  loginAction.logIn(undefined);
  loginAction.logIn(undefined, undefined);
});

test('loginStore#loginSuccess', assert => {
  setup();

  assert.plan(3);

  loginStore.addChangeListener(() => {
    assert.equal(
      loginStore.loginState.error,
      '',
      'Retains an empty `error` state'
    );

    assert.equal(
      loginStore.loginState.loggedIn,
      true,
      'Sets `loggedIn` state to `true`'
    );

    assert.equal(
      loginStore.userData.username,
      'testuser',
      'Updates the `user` state'
    );
  });

  loginAction.logIn('testuser', 'testpassword');
});

test('loginStore#logout', assert => {
  // NOTE: intentionally not resetting state, just removing listeners
  loginStore.removeAllListeners();

  assert.plan(3);

  loginStore.addChangeListener(() => {
    assert.equal(
      loginStore.loginState.loggedIn,
      false,
      'Resets `loggedIn` state to `false`'
    );

    assert.equal(
      loginStore.loginState.error,
      '',
      'Resets `error` state to empty string'
    );

    assert.equal(
      typeof loginStore.userData,
      'object',
      'Resets `user` state to empty object'
    );
  });

  loginAction.logOut();
});
