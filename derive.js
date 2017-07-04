// MIT license (see LICENSE)
// Copyright 2016 @rigidrabbit
'use strict';

module.exports = function derive(supertype, definition) {
  var proto = Object.create(supertype);
  if (definition == null) {
    return proto;
  }
  var keys = Object.getOwnPropertyNames(definition);
  var i, len, key, desc;
  for (i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    if (key === '__proto__') {
      continue;
    }
    desc = Object.getOwnPropertyDescriptor(definition, key);
    if (desc == null) {
      continue;
    }
    if (key === 'constructor') {
      desc.enumerable = false;
    }
    delete proto[key];
    Object.defineProperty(proto, key, desc);
  }
  return proto;
};
