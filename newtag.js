// MIT license (see LICENSE)
// Copyright 2017 @rigidrabbit
'use strict';

module.exports = function newtag(tagname, attrs) {
  var el = document.createElement(tagname);
  var keys = (attrs != null && Object.keys(attrs)) || [];
  for (var i = 0, len = keys.length; i < len; i++) {
    var k = keys[i];
    el.setAttribute(k, attrs[k]);
  }
  return el;
};
