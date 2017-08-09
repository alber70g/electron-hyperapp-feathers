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
    client.service('users').remove(state.user._id).then(() => {
      alert('user removed');
    });
    return {
      ...state,
      user: undefined,
      accessToken: undefined,
    };
  },

  createTime: (state, actions) => {
    // actions.setLoading(true);

    client
      .service('time')
      .create({ date: Date.now(), action: 'start' })
      .then(response => {
        actions.app.addTime(response);
        // actions.setLoading(false);
      })
      .catch(error => {
        console.error(error);
        // action.setLoading(false);
      });
  },

  addTime: (state, actions, time) => ({
    ...state,
    time: [...state.time, time],
  }),
};
