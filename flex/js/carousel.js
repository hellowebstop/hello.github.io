(function () {
    // 轮播图banner
    let leftBtn = document.querySelector('.left-btn');
    let rightBtn = document.querySelector('.right-btn');
    let carousel = document.querySelector('.carousel');
    // let li = document.querySelectorAll('li.small-circle ');
    let wrapCircle = document.querySelector('ol.circle');
    let circle = document.querySelectorAll('li.small-circle');
    let newNode = carousel.firstElementChild.cloneNode(true);
    let banner = document.getElementById('banner');
    carousel.appendChild(newNode);


    //设置编号方便访问
    let i = 0;
    //  let index  = 0;
    //设置节流
    var lock = true;

    //  设置右按钮
    rightBtn.onclick = right_onclick;
    function right_onclick() {
        if (!lock) return;
        i++;
        //  console.log(rightBtn);
        if (i >= 5) {
            setTimeout(function () {
                i = 0;
                carousel.style.transition = 'none '
                carousel.style.transform = 'translateX(' + -16.66 * i + '%)'; //位置便宜
            }, 2000)
        }
        //设置定时器异步操作来解决问题,先执行下面的过渡，再执行定时器瞬间拉回去
        carousel.style.transform = 'translateX(' + -16.66 * i + '%)'; //位置便宜
        carousel.style.transition = 'all 2s '
        lock = false;  //关锁

        setTimeout(function () {
            lock = true;
        }, 2000)

        setCircle();
    }

    //  设置左按钮
    leftBtn.onclick = function () {
        if (!lock) return;
        //最后一页
        if (i == 0) {

            carousel.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            carousel.style.transition = 'none ';
            // 利用定时器0秒
            i = 4; //i=4写在了外面,因为是定时器异步操作,会先执行 i =0,后执行i=4;
            setTimeout(function () {

                carousel.style.transform = 'translateX(' + -16.66 * i + '%)';
                carousel.style.transition = 'linear 2s ';
            }, 0)
        }
        else {
            i--;
            carousel.style.transform = 'translateX(' + -16.66 * i + '%)';
            carousel.style.transition = 'linear 2s ';
        }
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 2000)
        // carousel.style.transform = 'translateX(' + -16.66 * i + '%)';
        // carousel.style.transition = 'all 2s '

        setCircle();
    }

    // 设置小圆点样式
    function setCircle() {
        for (let j = 0; j <= 4; j++) {
            //有一瞬间会变为5，会不匹配，让它变为0
            if (j == i % 5) {
              
                circle[j].classList.add('current');
            }
            else {

                circle[j].classList.remove('current');
                // console.log(j);
            }
        }
    }

    // 点击小按钮图片就会移动
    wrapCircle.onclick = function (e) {
        if (!lock) return;
        if (e.target.tagName.toLowerCase() == 'li') {
            // console.log(e.target.tagName);
            let identifier = Number(e.target.getAttribute('data-n'));  //编号 0 - 1 - 2 - 3 - 4

            i = identifier; //获得的编号要给i，为了i和j进行比较添加类名
            carousel.style.transform = 'translateX(' + -16.66 * identifier + '%)'; //位置便宜
            carousel.style.transition = 'all 2s ';

        }
        setCircle();
        lock = false;
        setTimeout(function () {
            lock = true;
        }, 2000)
    }


    //定时器自动播放轮播图,当隔2秒的时候直接调用鼠标点击右按钮
    // seti(right_onclick,2000);
    var timer = setInterval(right_onclick, 2000);

    //当鼠标移动上去轮播图停止
    banner.onmousemove = function () {
        clearInterval(timer);
    }

    //当鼠标离开轮播图自动会恢复
    banner.onmouseleave = function () {
        // timer(); timeer返回的是一个数字不是函数
        timer = setInterval(right_onclick, 2000);
    }
})();
