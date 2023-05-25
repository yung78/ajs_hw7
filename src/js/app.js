import Validator from './Validator.js';
import phoneNumber from './phoneNumber.js';

const user1 = new Validator('user_alex78ru');
const user2 = new Validator('user666@bazinga.ru');

console.log(user1.validateUsername());
console.log(user2.validateUsername());

console.log(phoneNumber('8 (927) 000-00-00'));
console.log(phoneNumber('+86 000 000 0000'));
