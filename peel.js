// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var rawextend = require('./rawextend');

module.exports = function peel(src) {
  var husk = Object.create(null);
  if (src == null) {
    return husk;
  }
  return rawextend(husk, src);
};
