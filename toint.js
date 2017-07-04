// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function toint(n, errval) {
  if (n != null) {
    if (typeof n !== 'number') {
      n = parseFloat(n)
    }
    if (isFinite(n)) {
      if (n >= 0) {
        return Math.floor(n);
      } else {
        return -Math.floor(-n);
      }
    }
  }

  if (arguments.length > 1) {
    return errval;
  }

  return 0;
};
