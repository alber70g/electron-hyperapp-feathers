/* global window */
const token = window.localStorage.getItem(window.location.host);

export default {
  login: {
    password: '',
    username: '',
    message: '',
  },
  accessToken: token || null,
};
