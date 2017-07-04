// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function randint32(mini, maxi) {
  mini = ~~mini;
  return mini + ~~((~~maxi - mini + 1) * Math.random());
};
