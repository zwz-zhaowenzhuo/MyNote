## window对象方法
+ window.alert("content");
  > 功能：显示带有一段消息和一个确认按钮的**浏览器自带**警告框（开发中不建议使用，样式太low）
---
+ window.confirm("message");
    > 功能：显示一个带有**指定消息**和**OK**及**取消按钮**的对话框（开发中不建议使用，样式太low）\
      返回值：Boole，点击确定返回true，点击取消返回false
---
+ window.prompt("text,defaultText);
    > 功能：弹出一个提示你需要输入什么的对话框\
      参数说明：\
      text：要在对话框中显示的纯文本（不是HTML格式文本）\
      defaultText：默认输入的文本\
      返回值：如果用户单机提示框的取消按钮，则返回null，如果用户点击确认按钮，则返回输入字段当前显示的文本。
---
+ window.open(pageURL,name,parameters);
    > 功能：打开一个性的浏览器窗口或查找一个已命名的窗口 [具体教程](https://class.imooc.com/lesson/778#mid=19575)\
      参数说明：\
      pageURL：子窗口新路径\
      name：子窗口句柄（name声明了新窗口的名称，方便后期通过name对子窗口进行引用）
      parameters：窗口参数（各参数用都逗号分隔）

    ```
    open窗口参数：
    width：宽度     height：窗口高度
    left：窗口X轴坐标   top：窗口Y轴坐标
    toolbar：是否显示浏览器的工具栏
    menubar：是否显示菜单栏
    scrollbars：是否显示滚动条
    location：是否显示地址字段
    status：是否添加状态栏
    ```