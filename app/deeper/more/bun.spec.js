import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'bun' };
});

test.test('food is bun', t => {
  t.is(t.context.food, 'bun');
});
