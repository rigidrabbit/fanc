// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function isint(n) {
  return Number.isFinite(n) && (n === Math.floor(n));
};
