// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function randint(mini, maxi) {
  return mini + Math.floor(Math.random() * (maxi - mini + 1));
};
