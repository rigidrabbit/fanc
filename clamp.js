// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function clamp(min, val, max) {
  if (min > max) {
    var tmp = max;
    max = min;
    min = tmp;
  }
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
};
