(function () {
    let ul = document.querySelector('ul.banner-ul-li');
    let menus = document.querySelectorAll('div.linkage');
    let liHotGo = document.querySelectorAll('li.hotGo');

  
    //事件委托循环绑定事件(当鼠标移入的时候)
    ul.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // console.log(e.target);
            let t = e.target.getAttribute('data-t');  //li上的编号

            //排他操作删除所有类名
            for(let j  =0; j < liHotGo.length; j++){
                liHotGo[j].classList.remove('HightLight');
            }

            //为目标元素添加高光类名
            e.target.classList.add('HightLight');


            // 寻找相匹配的data-n进行对应
            //如果侧边盒子的data-t属性为移动上去盒子的data-n属性则展示盒子是,添加类名就可
            let theMenu = document.querySelector('div.linkage[data-t = '+t+']'); //核心代码,获得盒子上的data-n属性相对

            //先去掉所有类名排他操作
            for(let i =0; i < menus.length; i++){
                menus[i].className = 'linkage'
            }
            
            //给li添加上类名展示右侧的盒子
            theMenu.classList.add('current');
        }
    }

    
    //当鼠标移出的时候盒子就会消失掉
    ul.onmosueleave = function(){
        //每个右侧的盒子都会消失掉
        for(let i = 0; i <menus.length; i++){
            liHotGo[i].className = li[i].getAttribute('data-t');
            menus[i].className = 'linkage';
        }
    }
})();
