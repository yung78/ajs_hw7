import Validator from '../js/Validator.js';

test('username ok', () => {
  const user = new Validator('alexey78_yung-ru');
  expect(user.validateUsername()).toBe('ok');
});

test('username not ok', () => {
  const user = new Validator('alexey78@yung');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username ^[-|_|\\d]', () => {
  const user = new Validator('-alexey78_yung-ru');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username [-|_|\\d]$', () => {
  const user = new Validator('alexey78_yung-ru1');
  expect(user.validateUsername()).toBe('username not valid');
});

test('username [\\d{3}]', () => {
  const user = new Validator('-alexey178_yung-ru');
  expect(user.validateUsername()).toBe('username not valid');
});
