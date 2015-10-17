import test from 'tape';
import auth from '../auth';

test('auth', assert => {
  assert.plan(2);

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
});
