import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'lettuce' };
});

test.test('food is lettuce', t => {
  t.is(t.context.food, 'lettuce');
});
