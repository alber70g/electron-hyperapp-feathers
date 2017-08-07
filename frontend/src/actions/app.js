import client from '../configuration/feathers';

/* global window */

export default {
  logout: state => {
    window.localStorage.removeItem(window.location.host);
    return {
      ...state,
      accessToken: null,
    };
  },

  deleteUser: state => {
    client.service('users').remove(state.user.userId);
    return {
      ...state,
      user: undefined,
      accessToken: undefined,
    };
  },
};
