import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import axios from 'axios';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';

const client = feathers();
export default client
  .configure(rest('http://localhost:3030').axios(axios))
  .configure(hooks())
  .configure(auth());
