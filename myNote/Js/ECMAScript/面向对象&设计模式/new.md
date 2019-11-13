# new

    new 可以让一个函数实例化

    new 是一元运算符，专门运算 函数 的

    使用new之后会调用函数，就算不加()也会调用执行

    使用new之后，this的指向会修改为实例，实例就是一个对象（空白对象）

    使用new之后，函数默认返回值为实例对象，就不是undefined

    如果return后面有值，为原始类型，返回结果还是实例，如果return后面的值为引用类型，返回的结果就是return后的引用类型


# new示例

    ```
        var person = function () { };
        var p = new person(); // 3个阶段
        // Ⅰ、var p = { }; 创建阶段
        // Ⅱ、p.__proto__ = person.prototype 把person的原型赋值给p的属性（__proto__）
            // __proto__：是对象自带的属性（原型链）    prototype：是原型
        // Ⅲ、创建对象（初始化对象）p
            // person.call(p)

        console.log(person.prototype instanceof Object); // true
        console.log(p.__proto__ instanceof Object); // true
        console.log(p.__proto__ == person.prototype); // true
        console.log(p.__proto__ === person.prototype); // true
    ``` 



# 实例

    概念：
        具体到一个事物