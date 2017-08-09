import { h } from 'hyperapp';
import Login from './login';
import App from './app/index';

import client from '../configuration/feathers';

export default (state, { login: loginActions, app: appActions }) =>
  <div>
    {client.get('accessToken')
      ? <App
          state={state}
          logout={appActions.logout}
          deleteUser={appActions.deleteUser}
        />
      : <Login
          state={state.login}
          setEmail={loginActions.setEmail}
          setPassword={loginActions.setPassword}
          login={loginActions.login}
          register={loginActions.register}
        />}
    {state.isLoading ? <h4>Loading</h4> : ''}
  </div>;
