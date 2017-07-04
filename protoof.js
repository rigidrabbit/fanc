// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var getPrototypeOf;
if (typeof Object.getPrototypeOf === 'function') {
  getPrototypeOf = Object.getPrototypeOf;
} else {
  getPrototypeOf = function (o) {
    if (o == null) {
      return void 0;
    }
    if (o.hasOwnProperty('__proto__')) {
      return o.__proto__;
    } else {
      return null;
    }
  }
}

module.exports = function protoof(o) {
  return getPrototypeOf(o);
};
