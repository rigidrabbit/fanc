// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function tostr(s) {
  if (typeof s === 'string') {
    return s;
  } else if (s != null) {
    return '' + s;
  } else {
    return '';
  }
};
