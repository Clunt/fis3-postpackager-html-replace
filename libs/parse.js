'use strict';


var common = require('./common');
var Block = require('./block');

/**
 * 1 - newline
 * 2 - indentation
 * 3 - begin tag
 * 4 - original content
 * 5 - else tag
 * 6 - replace content
 * 7 - end tag
 *
 * @type {RegExp}
 */
var regex = /(\n?)([ \t]*)(<!--\s*@replace\s*-->)\n?([\s\S]*?)\n?(<!--\s*@replace.to\s*-->)\n?([\s\S]*?)\n?(<!--\s*@replace.end\s*-->)\n?/ig;

function parse(content, settings) {
  var matches = common.regexMatchAll(content, regex);
  matches.forEach(function(match) {
    var block = new Block(settings, match);
    content = content.replace(block.replacement, block.compile());
  }.bind(this));
  return content;
}

exports = module.exports = parse;
