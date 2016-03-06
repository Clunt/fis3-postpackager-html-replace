'use strict';


var Block = function(settings, match) {
  this.replacement = match[0];
  this.linefeed = match[1];
  this.indent = match[2];
  this.beginTag = match[3];
  this.originalContent = match[4];
  this.elseTag = match[5];
  this.replaceContent = match[6];
  this.endTag = match[7];

  this.settings = settings;
  this.replacements = [];
};

Block.prototype.build = function() {
  var result = this.settings.replace ? [this.replaceContent] : [this.originalContent];
  return [result];
};

Block.prototype.compile = function(tasks) {
  var buildResult = this.build();
  buildResult.unshift(null);
  buildResult.push(null);
  return buildResult.join(this.linefeed);
};

module.exports = Block;
