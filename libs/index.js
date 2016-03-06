/**
 * fis3-postpackager-html-replace
 * 替换类HTML文件内占位符为模板
 * By Clunt
 */

'use strict';

var parse = require('./parse');

var defaultSetting = {
  replace: true,
  keepUnassigned: false,
  keepBlockTags: false,
  resolvePaths: false
};

/**
 * <!-- @replace -->
 * Original Content
 * <!-- @replace.to -->
 * Replace Content
 * <!-- @replace.end -->
 */
function run (ret, conf, settings, opt) {
  settings = fis.util.merge(fis.util.clone(defaultSetting), settings);
  fis.util.map(ret.src, function(subpath, file) {
    if (file.useCompile && file.isHtmlLike && file.noMapJs !== false) { // 类html文件
      var content = file.getContent();
      content = parse(content, settings);
      file.setContent(content);
      if (file.useCache) {
        ret.pkg[file.subpath] = file;
      }
    }
  });
}

exports = module.exports = run;
