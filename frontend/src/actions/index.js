import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import axios from 'axios';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';

const feather = feathers();
const client = feather
  .configure(rest('http://localhost:3030').axios(axios))
  .configure(hooks())
  .configure(auth());

export default {
  setUsername: (state, actions, { value }) => ({
    ...state,
    login: { ...state.login, username: value },
  }),
  setPassword: (state, actions, { value }) => {
    return {
      ...state,
      login: { ...state.login, password: value },
    };
  },
  login: (state, actions) => {
    if (!state.login.username || !state.login.password) {
      return {
        ...state,
        login: { ...state.login, message: 'Please fill in the blanks' },
      };
    }
    actions.isLoading(true);
    client
      .authenticate({
        strategy: 'local',
        email: state.login.username,
        password: state.login.password,
      })
      .then(token => {
        actions.setToken(token);
        actions.isLoading(false);
      });
    return {
      ...state,
      login: { ...state.login, message: '' },
    };
  },
  register: ({ login }, actions) => {
    const { username, password } = login;
    actions.isLoading(true);
    client
      .service('users')
      .create({ strategy: 'local', username, password })
      .then(() => {
        alert('user created');
        actions.isLoading(false);
      })
      .catch(() => {
        alert('an error occurred' + JSON.stringify(arguments));
        actions.isLoading(false);
      });
  },
  isLoading: (state, actions, value) => ({ ...state, isLoading: value }),
  setToken: (state, actions, token) => ({ ...state, token }),
};
