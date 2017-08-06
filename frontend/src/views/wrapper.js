import { h } from 'hyperapp';
import Login from './login';
import Logo from './logo';
import App from './app/index';

export default (state, { login: loginActions }) =>
  <div>
    {state.accessToken
      ? <App state={state} />
      : <Login
          state={state.login}
          setEmail={loginActions.setEmail}
          setPassword={loginActions.setPassword}
          login={loginActions.login}
          register={loginActions.register}
        />}
    {state.isLoading ? <h4>Loading</h4> : ''}
  </div>;
