# fis-postpackager-html-replace
用于替换html内元素

## 功能

 - 自动将页面中声明的区域进行替换

## 用法
```shell
$ npm install -g fis3-postpackager-html-replace
$ vi path/project/fis-conf.js # 编辑项目配置文件
```

```javascript
//file : path/project/fis-conf.js
fis.match('::package', {postpackager: fis.plugin('html-replace', {
  replace: true // 默认false, true 替换为替换内容, false 替换为原始内容
}, 'append')})
```

```html
<body>
  <!-- @replace -->
    原始内容
  <!-- @replace.to -->
    替换内容
  <!-- @replace.end -->
</body>
```

- **true**

```html
<body>
    替换内容
</body>
```

- **false**

```html
<body>
    原始内容
</body>
```
