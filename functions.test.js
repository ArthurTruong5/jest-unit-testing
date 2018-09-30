const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  // matcher , a lot of different matchers in jest
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
  // matcher , a lot of different matchers in jest
  expect(functions.add(2, 2)).not.toBe(5);
});

// null
test('Should be Null', () => {
  // matcher , a lot of different matchers in jest
  expect(functions.isNull()).toBeNull();
});

// User should be Arthur Truong object. toBe is only for primitave types and arrays or objects should be set toEqual
test('User should be Arthur Truong object', () => {
  // matcher , a lot of different matchers in jest
  expect(functions.createUser()).toEqual({
    firstName: 'Arthur',
    lastName: 'Truong'
  });
});


// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});
// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
