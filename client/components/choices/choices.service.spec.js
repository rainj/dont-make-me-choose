'use strict';

describe('Service: choices', function () {

  // load the service's module
  beforeEach(module('makeChoiceApp'));

  // instantiate service
  var choices;
  beforeEach(inject(function (_choices_) {
    choices = _choices_;
  }));

  it('should do something', function () {
    expect(!!choices).toBe(true);
  });

});
