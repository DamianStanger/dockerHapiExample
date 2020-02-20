'use strict';

const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = require('@hapi/lab').script();
const { init } = require('../src/server');


describe('GET /', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/'
    });
    expect(res.statusCode).to.equal(200);
  });

  it('should pass with 1 == 1', () => {
    expect(1).to.equal(1);
  });
});
