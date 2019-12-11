# DOM(Document Object Model)
> 文档对象模型

    获取/修改DOM属性时可以使用   DOM对象.属性，但是class比较特殊需要使用className来获取

    获取id标签：
        语法：
            document.getElementById("id");
        功能：
            返回对拥有指定ID的第一个对象的引用
        返回值：
            DOM对象
        说明：
            id为DOM元素上id属性的值

    通过标签名称获取标签：
        语法：
            document.getElementsByTagName("tag");
        功能：
            返回一个对所有tag标签引用的集合
        返回值：
            数组
        说明：
            tag为要获取的标签名称
        
    获取一个标签下所有标签名相同的标签：
        语法：
            document.getElementByIdd('id').getElementsByTagName("tag");
        功能：
            返回某一个标签下对所有tag标签引用的集合
        返回值：
            数组
        说明：
            id为DOM元素上id属性的值
            tag为要获取的标签名称

        语法：
            ele.style.styleName = styleValue
        功能：
            设置ele元素的css样式
        说明：
            ele要设置的**DOM对象**（这里必须是DOM对象才可以，否则报错）
            styleName要设置样式的名称（例如：想要设置字体颜色在这里就填写color）
                Ps：这里不能写复合式名称，需要转成小驼峰
            styleValue：样式值。
        示例：
            ```
                let obj = document.getElementById("divId");
                obj.style.color = "#B452CD"; // #B452CD 是紫色
            ```

        设置/修改标签的内容
            语法：
                ele.innerHTML
            功能：
                返回ele元素开始和结束标签之间HTML内容
            语法：
                ele.innerHTML = "html";
            功能：
                设置ele元素开始和结束标签之间的HTML元素，设置内容为html

        设置/修改标签的文本内容
            语法：
                ele.innerText
            功能：
                返回ele元素的文本内容
            语法：
                ele.innerText = "text";
            功能：
                设置ele元素内的文本内容，设置内容为text

        设置/修改class属性值
            语法：
                ele.className
            功能：
                返回ele元素的class属性
            语法：
                ele.className = "cls";
            功能：
                设置ele元素的class属性为cls

        获取属性值    大多用于获取自定义的标签属性值
            语法：
                ele.getAttribute("attribute");
            功能：
                获取ele元素的attribute属性
            说明：
                ele是要操作的dom对象
                attribute是要获取的html属性

        设置/修改属性
            语法：
                ele.setAttribute("attribute",value);
            功能：
                在ele元素上设置/修改属性
            说明：
                ele是要操作的DMO对象
                attribute为要设置的属性名称
                value为设置的attribute属性的值
                当value要设置字符串类型的数据需要加引号

        删除
            语法：
                ele.removeAttribute("attribute");
            功能：
                要删除ele上的attribute属性
            说明：
                ele是要操作的DOM对象
                attribute是要删除的属性名称