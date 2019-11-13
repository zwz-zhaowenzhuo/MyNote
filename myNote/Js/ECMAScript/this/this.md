# this
    this默认指向window
    this指向谁一般看函数调用时点前面的是谁，点前面是谁this就指向谁

    Ⅰ.window
        全局打印this
        函数 + 括号
        定时器
        (function(){})()

    Ⅱ.事件触发的元素
        只要是事件函数内的this都指向事件触发的元素

    Ⅲ.点前面的主

    Ⅳ.实例
        构造函数下的this是实例   new Fn
        构造函数原型的this也是实例 (实例调用)
        Fn.prototype.say()  this为Fn.prototype


    Ⅴ.箭头函数
        指向的是声明箭头函数的上下文this
        没有arguments，不能new


# 改写this

    当一个函数创建的时候，天生自带的方法，其中有call,apply,bind方法
        call:
            有若干个参数:
                第一个参数:
                    修改this指向

                第二个参数之后:
                    函数的实参

        apply:
            有2个参数:
                第一个参数:
                    修改this指向
                第二个参数:
                    数组，数组里面放的是实参

        bind:(惰性函数,柯里化函数，高阶函数)
            多个参数
                第一个参数:
                    修改this指向

                第二个参数之后:
                    函数的实参

        它返回的是新函数，只要调用返回的函数才能执行函数内的代码

        都是改变this指向的方法


        细节:
            在使用它们修改this的时候，不要传null和undefined，因为传了也不认还是走默认的window


# this指向模板
    - 全局this window
    ```
        console.log(this); // window
        fn(); // window

        (function() {
            console.log(this); // window
        })()
    ```

    - 事件this 事件触发的对象
    ```
        btn.onclick = function() {
            console.log(this); // btn
        }
    ```

    - 对象下的this指向.前面的主
    ```
        obj = {
            style:{
                fn:function(){
                    console.log(this);
                }
            }
        }
        obj.style.fn(); // this -> obj.style
    ```