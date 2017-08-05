import { app } from 'hyperapp';
import devtools from 'hyperapp-redux-devtools';

import actions from './actions';
import state from './state';
import view from './views/wrapper';

app({ state, actions, view, mixins: [devtools()] });
