// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function without(o, val) {
  if (o == null) {
    return o;
  }
  var copy, i, len, v;
  if (Array.isArray(o)) {
    copy = [];
    for (i = 0, len = o.length; i < len; i++) {
      v = o[i];
      if (v !== void 0 && v !== val) {
        copy.push(v);
      }
    }
    return copy;
  }
  copy = {};
  for (var prop in o) {
    v = o[prop];
    if (v !== val) {
      copy[prop] = v;
    }
  }
  return copy;
};
