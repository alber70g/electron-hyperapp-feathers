import { h } from 'hyperapp';
// import Logo from './logo';
import Login from './login';
import App from './app/index';

export default (state, { login: loginActions, app: appActions }) =>
  <div>
    {state.accessToken
      ? <App state={state} logout={appActions.logout} deleteUser={appActions.deleteUser} />
      : <Login
          state={state.login}
          setEmail={loginActions.setEmail}
          setPassword={loginActions.setPassword}
          login={loginActions.login}
          register={loginActions.register}
        />}
    {state.isLoading ? <h4>Loading</h4> : ''}
  </div>;
