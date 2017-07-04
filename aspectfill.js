// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function aspectfill(width, height, boundsWidth, boundsHeight) {
  var scaleW = boundsWidth / width;
  var scaleH = boundsHeight / height;
  if (scaleW < scaleH) {
    return {
      width: width * scaleH,
      height: height * scaleH
    };
  } else {
    return {
      width: width * scaleW,
      height: height * scaleW
    };
  }
};
