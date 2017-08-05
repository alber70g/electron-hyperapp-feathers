export default {
  setUsername: (state, actions, { value }) => ({
    ...state,
    login: { ...state.login, value },
  }),
  setPassword: (state, actions, { value }) => {
    return {
      ...state,
      login: { ...state.login, value },
    };
  },
  login: (state, actions) => {
    alert(state.login.username, state.login.password);
  },
};
