const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  // matcher , a lot of different matchers in jest
  expect(functions.add(2, 2)).toBe(4);
});
