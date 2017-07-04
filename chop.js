// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var tostr = require('./tostr');
var isint = require('./isint');

module.exports = function chop(s, at) {
  if (isint(at)) {
    if (at <= 0) {
      return ['', s];
    } else if (at >= s.length) {
      return [s, ''];
    } else {
      return [s.slice(0, at), s.slice(at)];
    }
  } else {
    at = tostr(at);
    var len = at.length;
    at = s.indexOf(at);
    if (at < 0) {
      return [s, ''];
    }
    return [s.slice(0, at), s.slice(at + len)];
  }
};
