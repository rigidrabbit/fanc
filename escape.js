// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var reg = /["&'<>`]/g;
var dic = {
  '"': '&quot;',
  '&': '&amp;',
  '\'': '&apos;',
  '<': '&lt;',
  '>': '&gt;',
  '`': '&#96;'
};
module.exports = function escape(s) {
  return !(typeof s === 'string' && reg.test(s)) ? s : s.replace(reg, function (c) {
    return dic[c];
  });
};
