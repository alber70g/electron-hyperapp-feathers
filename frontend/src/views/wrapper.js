import { h } from 'hyperapp';
import Login from './login';
import Logo from './logo';
import App from './app';

export default (state, actions) =>
  <div>
    {state.user
      ? <App state={state} />
      : <Login
          state={state.login}
          setUsername={actions.setUsername}
          setPassword={actions.setPassword}
          login={actions.login}
        />}
  </div>;
