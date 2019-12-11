## BOM（browser object model）
> 浏览器对象模型

+ BOM对象\
    window\
    navigator\
    screen\
    history\
    location\
    document\
    event

## window对象
> window是浏览器的一个实例，在浏览器中，window对象有双重角色，Ta既是通过javaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象(Global对象 -> 全局对象)

## window对象方法---定时器
[超时调用](https://class.imooc.com/lesson/778#mid=19581)
> 语法：\
  setTimeout(code,milliesc);\
  功能：\
  在指定的毫秒数后调用函数或计算表达式\
  参数说明：\
  code：要调用的函数或要执行的JavaScript代码串\
  millisec：在执行代码前需等待的毫秒数\

示例
```
setTimeout("alert('厉害了')", 1000);
```

## 清除超时调用
[清除超时调用](https://class.imooc.com/lesson/778#mid=19581)
> 语法：clearTimeout(id_of_settimeout)\
  功能：\
  取消由setTimeout()方法设置的timeout\
  参数说明：\
  id_of_settimeout：由setTimeout()返回的ID值，该值标识要取消的延迟执行代码块

---
[间歇调用]()