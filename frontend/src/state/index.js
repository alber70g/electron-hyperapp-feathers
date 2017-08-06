/*global window*/
const token = window.localStorage.getItem(location.host);

export default {
  login: {
    password: '',
    username: '',
    message: '',
  },
  accessToken: token || null,
};
