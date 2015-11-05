'use strict';

var lc = require('./helper/lifecycle');
var expect = require('chai').expect;

describe('Basic :: ', function () {

  before(lc.setup);
  after(lc.teardown);

  it('Sails.js should run', function () {
    expect(sails).to.be.ok;
  });

  it('sendgrid hook should load', function () {
    expect(sails.hooks.sendgrid).to.be.ok;
    expect(sails.sendgrid).to.be.ok;
  });

  it('agenda should has all methods', function () {
    expect(sails.sendgrid).to.have.property('send')
      .and.to.be.a('function');
  });

});
