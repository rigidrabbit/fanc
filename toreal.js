// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function toreal(n, errval) {
  if (n != null) {
    if (typeof n !== 'number') {
      n = parseFloat(n);
    }
    if (isFinite(n)) {
      return n;
    }
  }

  if (arguments.length > 1) {
    return errval;
  }

  return 0.0;
};
