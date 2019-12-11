## 掌握Math对象的方法
+   min()\
    max()\
    ceil()\
    floor()\
    round()\
    abs

## 使用方法
Math.min()
> 语法：\
  Math.min(num1,num2,...,numN)\
  功能：\
  求一组数中的最小值。\
  返回值：Number。\
  Ps：数组不能直接放入，并且如果参数是不能转换成数字的非数字值，则返回NaN。

Math.max()
> 语法：\
  Math.max(num1,num2,...,numN)\
  功能：\
  求一组数中的最大值。\
  返回值：Number。\
  Ps：不能直接放入数组

Math.ceil()
> 语法：\
  Math.ceil(num);\
  功能：\
  向上取整，即返回大于num的最小整数\
  返回值：Number。\
  Ps：只要有小数点整数部分+1返回

Math.floor()
> 语法：\
  Math.floor(num);
  功能：\
  向下取整，返回num的整数部分。\
  返回值：Number。\

Math.round()
> 语法：\
  Math.round(num);\
  功能：\
  将数值四舍五入为最接近的整数。\
  返回值：Number。

Math.abs()
> 语法：\
  Math.abs(num);\
  功能：\
  返回num的绝对值。\
  返回值：Number。

Math.random();
> 语法：\
  Math.random();\
  功能：\
  返回大于0小于1的一个随机数。\
  返回值：Number\
  说明：\
  求n到m之间的随机整数的公式：\
  random = Math.floor(Math.random()*(m-n+1)+n);