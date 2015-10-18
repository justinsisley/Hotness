import test from 'tape';
import auth from '../auth';

test('auth', assert => {
  assert.plan(3);

  assert.equal(
    typeof auth.requireAuth,
    'function',
    'Provides a `requireAuth` method'
  );

  assert.equal(
    typeof auth.requireNoAuth,
    'function',
    'Provides a `requireNoAuth` method'
  );

  assert.equal(
    typeof auth.logOut,
    'function',
    'Provides a `logOut` method'
  );
});
