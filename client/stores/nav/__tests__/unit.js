import test from 'tape';
import navStore from '../nav';

test('navStore', assert => {
  assert.plan(2);

  assert.equal(
    navStore.publicNavItems instanceof Array,
    true,
    'Has a `publicNavItems` getter that returns an array of nav items'
  );

  assert.equal(
    navStore.appNavItems instanceof Array,
    true,
    'Has a `publicNavItems` getter that returns an array of nav items'
  );
});
