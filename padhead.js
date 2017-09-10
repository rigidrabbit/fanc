// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var tostr = require('./tostr');

module.exports = function padhead(s, p, ln) {
  s = tostr(s);
  ln = ~~ln;
  if (s.length >= ln) {
    return s;
  }
  ln -= s.length;
  p = tostr(p);
  var pln = p.length;
  if (pln > 0) {
    var n = ~~(ln / pln);
    var m = ln - n * pln;
    if (m) {
      p = p.repeat(n) + p.slice(0, m);
    } else {
      p = p.repeat(n);
    }
  } else {
    p = ' '.repeat(ln);
  }
  return p + s;
};
