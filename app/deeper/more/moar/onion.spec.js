import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'onion' };
});

test.test('food is onion', t => {
  t.is(t.context.food, 'onion');
});
