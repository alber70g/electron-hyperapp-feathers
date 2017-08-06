import { h } from 'hyperapp';

export default ({ setEmail, setPassword, login, register, state }) => {
  return (
    <div class="login_form">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <img
              src="/styles/themes/default/assets/images/logo.png"
              class="image"
            />
            <div class="content">Log-in to your account</div>
          </h2>
          <form class="ui large form">
            <div class="ui segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    oninput={e => setEmail({ value: e.target.value })}
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    oninput={e => setPassword({ value: e.target.value })}
                  />
                </div>
              </div>
              <div class="ui buttons">
                <div class="ui primary submit button" onclick={login}>
                  Login
                </div>
                <div class="or" />
                <div class="ui teal submit button" onclick={register}>
                  Register
                </div>
              </div>
            </div>

            {state.message
              ? <div class="ui error message visible">
                  {state.message}
                </div>
              : ''}
          </form>

          <div class="ui message">
            Made with &lt;3 by <a href="#">Space IT</a>
          </div>
        </div>
      </div>
    </div>
  );
};
