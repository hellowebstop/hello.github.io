let hotPicture = document.querySelector('.lb');
let lbPicture = document.querySelectorAll('.wh');


// 克隆节点
hotPicture.innerHTML += hotPicture.innerHTML;

//一直纠结要不要写ledt不用纠结,使用定时器就需要写因为是函数作用域
// js css3不用写因为是全局作用域
var left = 0;
var timer2;
// 定时器进行偏移
// 定时器是函数作用域所以变量要定义在全局范围内

ds();
function ds() {
    clearInterval(timer2);
    timer2 = setInterval(function () {
        // hotPicture.style.left =  '10px';
        left -= 5;
        // 如果小于这个px就为0，这边有边框的属性不好计算图片卡隔
        if (left <= -1160) {
            left = 0;
        }
        hotPicture.style.left = left + 'px';
    }, 20) //1秒钟执行20帧



    //如果鼠标移动上去，就停止banner
    hotPicture.onmouseover = function () {
        clearInterval(timer2);
    }
}


// 离开恢复baneer
hotPicture.onmouseleave = function () {
    //调用函数定时器又恢复定时
     ds();
}