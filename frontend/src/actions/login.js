import client from '../configuration/feathers';

/* global window */

export default {
  setEmail: (state, { login: actions }, { value }) => ({
    ...state,
    login: { ...state.login, email: value },
  }),

  setPassword: (state, { login: actions }, { value }) => ({
    ...state,
    login: { ...state.login, password: value },
  }),

  login: (state, { login: actions }) => {
    if (!state.login.email || !state.login.password) {
      return {
        ...state,
        login: { ...state.login, message: 'Please fill all fields' },
      };
    }
    // better way of doing authentication including localStorage
    // https://github.com/feathersjs/feathers-authentication-client#complete-example
    client
      .authenticate({
        strategy: 'local',
        email: state.login.email,
        password: state.login.password,
      })
      .then(response => {
        console.log('response authenticate')
        return client.passport.verifyJWT(response.accessToken);
      })
      .then(payload => {
        console.log('response verifyJWT')
        return client.service('users').get(payload.userId)})
      .then(user => {
        console.log('response get from user')
        var x = x();
        actions.setUser(user, x);
      })
      .catch(error => {
        console.warn('catch error', error)
        actions.setMessage(`an error occurred: ${error.message}`);
      })
      .finally(() => {
        console.log('finally')
        actions.isLoading(false);
      });
    return {
      ...state,
      isLoading: true,
    };
  },

  setUser: (state, action, user) => ({ ...state, user }),

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
      })
      .finally(() => {
        actions.isLoading(false);
      });
    return state;
  },
  
  isLoading: (state, { login: actions }, value) => ({
    ...state,
    isLoading: value,
  }),

  setMessage: (state, { login: actions }, message) => ({
    ...state,
    login: { ...state.login, message },
  }),
};
