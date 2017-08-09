const assert = require('assert');
const app = require('../../src/app');

describe('\'time\' service', () => {
  it('registered the service', () => {
    const service = app.service('time');

    assert.ok(service, 'Registered the service');
  });
});
