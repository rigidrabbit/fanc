// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var randint32 = require('./randint32');

module.exports = function randstr(len, charset) {
  var range = charset.length;
  if (len <= 0 || range === 0) {
    return '';
  }
  range--;
  var s = [];
  for (var i = 0; i < len; i++) {
    s.push(charset[randint32(0, range)]);
  }
  return s.join('');
};
