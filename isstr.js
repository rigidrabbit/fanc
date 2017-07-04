// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function isstr(s, minlen) {
  return typeof s === 'string' && s.length >= ~~minlen;
};
