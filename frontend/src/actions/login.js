import client from '../configuration/feathers';

/* global window */

export default {
  setEmail: (state, { login: actions }, { value }) => ({
    ...state,
    login: { ...state.login, email: value },
  }),
  setPassword: (state, { login: actions }, { value }) => {
    return {
      ...state,
      login: { ...state.login, password: value },
    };
  },
  login: (state, { login: actions }) => {
    if (!state.login.email || !state.login.password) {
      return {
        ...state,
        login: { ...state.login, message: 'Please fill all fields' },
      };
    }
    actions.isLoading(true);
    // better way of doing authentication including localStorage
    // https://github.com/feathersjs/feathers-authentication-client#complete-example
    client
      .authenticate({
        strategy: 'local',
        email: state.login.email,
        password: state.login.password,
      })
      .then(response => {
        actions.setToken(response);
        actions.isLoading(false);
      })
      .catch(error => {
        actions.setMessage(`an error occurred: ${error.message}`);
        actions.isLoading(false);
      });
    return {
      ...state,
      login: { ...state.login, message: '' },
    };
  },
  register: (state, { login: actions }) => {
    const { login } = state;
    if (!state.login.email || !state.login.password) {
      return {
        ...state,
        login: {
          ...state.login,
          message: 'Please fill in all fields',
        },
      };
    }
    const { email, password } = login;
    actions.isLoading(true);
    client
      .service('users')
      .create({ strategy: 'local', email, password })
      .then(() => {
        window.alert('user created');
      })
      .catch(() => {
        window.alert(`an error occurred ${JSON.stringify(arguments)}`);
        actions.isLoading(false);
      });
    return state;
  },
  isLoading: (state, { login: actions }, value) => ({
    ...state,
    isLoading: value,
  }),
  setToken: (state, { login: actions }, { accessToken }) => {
    window.localStorage.setItem(window.location.host, accessToken);
    return { ...state, accessToken };
  },
  setMessage: (state, { login: actions }, message) => ({
    ...state,
    login: { ...state.login, message },
  }),
};
