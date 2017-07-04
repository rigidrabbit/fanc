// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var protoof = require('./protoof');
var rawextend = require('./rawextend');

module.exports = function rawdup(src) {
  if (src == null) {
    return src;
  }
  var dest;
  if (Array.isArray(src)) {
    dest = [];
  } else {
    dest = Object.create(protoof(src));
  }
  return rawextend(dest, src);
};
