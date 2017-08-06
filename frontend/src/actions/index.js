

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

    return {
      ...state,
      login: { ...state.login, message: '' },
    };
  },
  register: ({ login }, actions) => {
    const { username, password } = login;
    actions.isLoading(true);
    users
      .create({ strategy: 'local', username, password })
      .then(() => {
        alert('user created');
        actions.isLoading(false);
      })
      .catch(() => {
        alert('an error occurred', arguments);
      });
  },
  isLoading: (state, actions, value) => ({ ...state, isLoading: value }),
};
