import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import axios from 'axios';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';

const feather = feathers();
export default feather
  .configure(rest('http://localhost:3030').axios(axios))
  .configure(hooks())
  .configure(auth());
/*global window*/
