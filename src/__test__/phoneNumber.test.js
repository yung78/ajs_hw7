import phoneNumber from '../js/phoneNumber.js';

test('username ok', () => {
  const result = phoneNumber('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('username ok', () => {
  const result = phoneNumber('+7 960 001 02 03 ');
  expect(result).toBe('+79600010203');
});

test('username ok', () => {
  const result = phoneNumber('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});
