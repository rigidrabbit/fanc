// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var randstr = require('./randstr');

var ALNUM =
      'abcdefghijklmnopqrstuvwxyz' +
      'ABCDEFGHIJKLMNOPQRSTUVWXZY' +
      '1234567890';

module.exports = function randalnum(len) {
  return randstr(len, ALNUM);
};
