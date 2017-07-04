// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

var chop = require('./chop');

module.exports = function parsequery(query, keepitraw) {
  var params = {};
  query = '' + query;
  if (query === '') {
    return params;
  }
  if (query[0] === '?') {
    query = query.slice(1);
  }
  var ss = query.split('&');
  for (var i = 0, len = ss.length; i < len; i++) {
    var s = ss[i];
    if (s === '') {
      continue;
    }
    var kv = chop(s, '=');
    if (!keepitraw) {
      params[kv[0]] = decodeURIComponent(kv[1]);
    } else {
      params[kv[0]] = kv[1];
    }
  }
  return params;
};
