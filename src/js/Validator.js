export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const rePositive = /^[a-z0-9_-]+$/i;
    const reNegative = /\d{3}|^[-|_|\d]|[-|_|\d]$/;
    const message = !rePositive.test(this.username.trim()) ? 'username not valid' :
      reNegative.test(this.username.trim()) ? 'username not valid' : 'ok';

    return message;
  }
}
