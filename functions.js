const functions = {
  // ES6 way
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user =
    { firstName: 'Arthur' }
      user['lastName'] = 'Truong';
      return user;

  }

  // ES5 way
  // add: function(num1, num2) {
  //   return num1 + num2;
};


module.exports = functions;
