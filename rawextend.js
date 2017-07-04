// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function rawextend(dest, src /*, src2, src3, ...*/) {
  if (dest == null) {
    dest = Object.create(null);
  }
  var nargs = arguments.length;
  if (nargs < 2) {
    return dest;
  }
  var arg;
  for (arg = 1; arg < nargs; arg++) {
    src = arguments[arg];
    if (src == null) {
      continue;
    }
    var keys = Object.getOwnPropertyNames(src);
    var i, len, key, desc;
    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      if (key === '__proto__') {
        continue;
      }
      desc = Object.getOwnPropertyDescriptor(src, key);
      if (desc == null) {
        continue;
      }
      delete dest[key];
      Object.defineProperty(dest, key, desc);
    }
  }
  return dest;
};
