// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var slice = [].slice;
var unshift = [].unshift;

module.exports = function proxy(thiz, callee, prior_arg/*, prior_arg, ...*/) {
  var args = slice.call(arguments);
  var priors = [];
  if (args.length > 2) {
    priors = args.slice(2);
  }

  if (typeof callee !== 'function') {
    if (typeof thiz !== 'function') {
      return function () {
      };
    }
    if (args.length > 1) {
      priors.unshift(callee);
    }
    callee = thiz;
    thiz = void 0;
  }

  return function marshal() {
    var args = slice.call(arguments);
    unshift.apply(args, priors);
    callee.apply(thiz, args);
  };
};
