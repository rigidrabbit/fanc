// MIT license (see LICENSE)
// Copyright 2015 @rigidrabbit
'use strict';

module.exports = function aspectfit(width, height, boundsWidth, boundsHeight) {
  var scaleW = boundsWidth / width;
  var scaleH = boundsHeight / height;
  if (scaleW < scaleH) {
    return {
      width: width * scaleW,
      height: height * scaleW
    };
  } else {
    return {
      width: width * scaleH,
      height: height * scaleH
    };
  }
};
