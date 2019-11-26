#   jQuery的引入

> 常规引入\
> 需要注意：引入jquery.js文件需要在head里引入，并且jquery.js的引入一定要在其他js文件引入之前，否则会报错
```
    <script src="../IDE/jQuery/node_modules/jquery/dist/jquery.js"></script>
```

> jQuery符号 & 符号$\
> jQuery是把所有功能全部封装在一个全局变量中，而$也是一个合法的变量名，他是jQuery的别名
```
    jQuery === $
```

# $符号

> $的使用\
> 绝大多数的情况下我们使用$符号，若$符号被占用，且不可更改的情况下，就只能使用jquery

# jQuery的书写格式

> jQuery(selector, context);\
> selector: 选择器 context: 内容传递\

第一种书写格式:
```
$(document).ready(function () {
    // jQuery书写格式 示例: ↓
    $("div").addClass('className');
});
```
第二种书写格式:
```
$().ready(function () {
    // jQuery书写格式 示例: ↓
    $("div").addClass('className');
});
```
第三种书写格式:
```
$(function () {
    // jQuery书写格式 示例: ↓
    $("div").addClass('className');
})
```