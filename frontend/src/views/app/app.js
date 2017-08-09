import { h } from 'hyperapp';

export default ({ state, logout, deleteUser, createTime }) =>
  <div>
    <h1>App</h1>
    <button onclick={deleteUser}>Delete User</button>
    <button onclick={logout}>Logout</button>
    <button onclick={createTime}>Create time</button>
    <ul>
      { state.time.map(time => <li>{time.date} {time.action}</li>)}
    </ul>
  </div>;
