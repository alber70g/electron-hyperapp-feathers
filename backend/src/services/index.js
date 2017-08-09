const users = require('./users/users.service.js');
const time = require('./time/time.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(time);
};
