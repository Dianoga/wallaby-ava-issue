import test from 'ava';

test.beforeEach(t => {
  t.context = { food: 'pickle' };
});

test.test('food is pickle', t => {
  t.is(t.context.food, 'pickle');
});
