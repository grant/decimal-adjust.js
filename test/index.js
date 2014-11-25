var decimalAdjust = require('../');
var assert = require('assert');

describe('decimalAdjust', function() {
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };

  Math.floor10 = function(value, exp) {
    return decimalAdjust('floor', value, exp);
  };

  Math.ceil10 = function(value, exp) {
    return decimalAdjust('ceil', value, exp);
  };

  it('should round', function(){
    assert.equal(55.6, Math.round10(55.55, -1));
    assert.equal(55.5, Math.round10(55.549, -1));
    assert.equal(60, Math.round10(55, 1));
    assert.equal(50, Math.round10(54.9, 1));
    assert.equal(-55.5, Math.round10(-55.55, -1));
    assert.equal(-55.6, Math.round10(-55.551, -1));
    assert.equal(-50, Math.round10(-55, 1));
    assert.equal(-60, Math.round10(-55.1, 1));
  });

  it('should floor', function(){
    assert.equal(55.5, Math.floor10(55.59, -1));
    assert.equal(50, Math.floor10(59, 1));
    assert.equal(-55.6, Math.floor10(-55.51, -1));
    assert.equal(-60, Math.floor10(-51, 1));
  });

  it('should ceil', function(){
    assert.equal(55.6, Math.ceil10(55.51, -1));
    assert.equal(60, Math.ceil10(51, 1));
    assert.equal(-55.5, Math.ceil10(-55.59, -1));
    assert.equal(-50, Math.ceil10(-59, 1));
  });
});
