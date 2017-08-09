// Initializes the `time` service on path `/time`
const createService = require('feathers-nedb');
const createModel = require('../../models/time.model');
const hooks = require('./time.hooks');
const filters = require('./time.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'time',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/time', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('time');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
