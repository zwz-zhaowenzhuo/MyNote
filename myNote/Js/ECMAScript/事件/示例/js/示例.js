// 获取字数提示标签
let getSetNum = document.getElementById("setNum");
// 获取文本框
let getTxt = document.getElementById("setTxt");
// 能写入的字数上限
let sum = 30;

// 绑定键盘事件
document.onkeyup = function () {
    let len = getTxt.value.length,
        residueNum = sum - len;
    getSetNum.innerHTML = residueNum;
}