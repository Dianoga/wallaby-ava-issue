import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'cheese' };
});

test.test('food is cheese', t => {
  t.is(t.context.food, 'cheese');
});
