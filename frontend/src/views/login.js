import { h } from 'hyperapp';

export default ({ setUsername, setPassword, login }) => {
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
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    oninput={e =>
                      setUsername({ value: e.target.value })}
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
                    oninput={e =>
                      setPassword({ value: e.target.value })}
                  />
                </div>
              </div>
              <div
                class="ui fluid large teal submit button"
                onclick={login}
              >
                Login
              </div>
            </div>

            <div class="ui error message" />
          </form>

          <div class="ui message">
            New to us? {' '}
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
