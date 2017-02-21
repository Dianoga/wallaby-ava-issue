import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'burger' };
});

test.test('food is burger', t => {
  t.is(t.context.food, 'burger');
});
