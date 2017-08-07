import { app } from 'hyperapp';
import devtools from 'hyperapp-redux-devtools';

import actions from './actions';
import state from './state';
import view from './views/wrapper';

import client from './configuration/feathers';

/* global window */
const storedAccessToken = window.localStorage.getItem(window.location.host);
if (storedAccessToken) {
  let newState = { ...state };
  client
    .authenticate({
      strategy: 'jwt',
      storedAccessToken,
    })
    .then(({ accessToken }) => {
      newState = { ...newState, accessToken };
      return client.passport.verifyJWT(accessToken);
    })
    .then(response => {
      return client.service('users').get(response.userId);
    })
    .then(user => {
      newState = { ...newState, user };
      window.localStorage.setItem(window.location.host, newState.accessToken);
      app({ newState, actions, view, mixins: [devtools()] });
    })
    .catch(() => {
      window.localStorage.removeItem(window.location.host);
      app({ state, actions, view, mixins: [devtools()] });
    });
} else {
  app({ state, actions, view, mixins: [devtools()] });
}
