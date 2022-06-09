// 头部导航js
let li = document.querySelectorAll('.commer');
let triangel = document.querySelectorAll('.triangel');
let community = document.querySelector('.community');
//当鼠标移入的时候 循环绑定事件最初的方式(for循环配合this
for (let j = 0; j < triangel.length; j++) {
    triangel[j].onmouseover = function () {
        this.style.transition = 'all 0.3s linear 0s'
        this.style.transform = 'rotate(180deg)';
    }
}


//当鼠标移出的时候 //循环绑定事件
for (let j = 0; j < triangel.length; j++) {
    triangel[j].onmouseleave = function () {
        this.style.transition = 'all 0.3s linear 0s'
        this.style.transform = '';
    }
}

//当鼠标移入的时候下拉框显示出来
for(let i = 0; i < li.length; i++){
    li[i].onmouseover = function(){
        community.style.display = 'block';
    }
}

for(let i = 0; i < li.length; i++){
    li[i].onmouseleave = function(){
        community.style.display = 'none';
    }
}


