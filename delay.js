// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var effectiveFirer = function (fn) {
  return setTimeout(fn, 0);
};
var canceller = clearTimeout;
if (typeof setImmediate === 'function' && typeof clearImmediate === 'function') {
  effectiveFirer = setImmediate;
  canceller = clearImmediate;
} else if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
  effectiveFirer = requestAnimationFrame;
  canceller = cancelAnimationFrame;
}

module.exports = function delay(millis, cbfunc, thiz) {
  if (typeof millis === 'function') {
    thiz = cbfunc;
    cbfunc = millis;
    millis = 0;
  }
  if (typeof cbfunc !== 'function') {
    return null;
  }

  var id = null;
  var wrapper = function wrapper() {
    if (id == null) {
      return;
    }
    id = null;
    if (thiz !== void 0) {
      cbfunc.call(thiz);
    } else {
      cbfunc();
    }
  };

  if (millis <= 0) {
    id = effectiveFirer(wrapper);
    return function () {
      if (id == null) {
        return false;
      }
      canceller(id);
      id = null;
      return true;
    }
  } else {
    id = setTimeout(wrapper, millis);
    return function () {
      if (id == null) {
        return false;
      }
      clearTimeout(id);
      id = null;
      return true;
    }
  }
};
