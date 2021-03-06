var assert = require('assert');
var validate = require('../');

test('should return true for valid email', function(){
  assert.equal(true, validate.isEmail()('test@email.com'));
});

test('should return false for invalid email', function(){
  assert.equal(false, validate.isEmail()('test@email'));
});

test('should return true for valid chain', function(){
  assert.equal(true, validate.len(6, 64).isEmail()('test@email.com'));
});

test('should return false for invalid chain', function(){
  assert.equal(false, validate.len(60, 100).isEmail()('test@email.com'));
});

test('test bad isDomain', function(){
  assert.equal(false, validate.isDomain('twitter.com')('http://facebook.com/tristanzajonc'));
});

test('test good isDomain', function(){
  assert.equal(false, validate.isDomain('twitter.com')('http://twitter.com/tristanzajonc'));
});
