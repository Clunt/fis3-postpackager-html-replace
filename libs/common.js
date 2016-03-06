'use strict';

exports.regexMatchAll = function(str, regexp) {
  var matches = [];
  str.replace(regexp, function() {
    var arr = Array.prototype.slice.call(arguments);
    matches.push(arr);
  });
  return matches;
};
