const createHelloMessage = require('../../utils/createHelloMessage');

test('Should create  a message that says "Hello, Justin"', () => {
  expect(createHelloMessage('Justin')).toBe('Hello, Justin');
});

test('Should not create a message that has an empty string', () => {
  expect(createHelloMessage()).toBe(undefined);
});

test('Should not create a message that is undefined', () => {
  expect(createHelloMessage(undefined)).toBe(undefined);
});
