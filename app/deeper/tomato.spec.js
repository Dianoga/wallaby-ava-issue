import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'tomato' };
});

test.test('food is tomato', t => {
  t.is(t.context.food, 'tomato');
});
