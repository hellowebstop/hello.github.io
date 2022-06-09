// 返回顶部
let backTop = document.getElementById('backTop');
var timer;

window.onscroll = function () {
    // console.log(document.documentElement.scrollTop);
    //注意滚动值没有单位px
    if (document.documentElement.scrollTop >= 1000) {
        backTop.style.display = 'block';
    }else{
        backTop.style.display = 'none'
    }

}


backTop.onclick = function () {
    //返回顶部至0
    clearInterval(timer);
    timer = setInterval(function () {
        document.documentElement.scrollTop -= 50; //卷动高度减少10
        if (window.scrollY <= 0) {
            clearInterval(timer); //如果到头部了就不会继续向上滚动了
        }
    }, 20) //1秒50帧
    // document.documentElement.scrollTop = 0;
}