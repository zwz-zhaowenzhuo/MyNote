# this
    this默认指向window
    this指向谁一般看函数调用时点前面的是谁，点前面是谁this就指向谁

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