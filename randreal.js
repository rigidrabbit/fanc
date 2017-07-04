// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function randreal(minf, maxf) {
  return minf + Math.random() * (maxf - minf);
};
