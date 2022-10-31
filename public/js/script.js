function click1() {
    //초기 변수값
    let num = 0;
    //목적값
    let targetX = document.querySelector('div#cf3>article>section>div#show>div#all>img').clientWidth;

    // 변수 : img width 
    // 클릭 -> 변수 알아보고   targetX, 자신은 안보이게, next 보이게

    // button
    const Prev = document.querySelector('div#cf3 .pre');
    const Next = document.querySelector('div#cf3 .next');
    const Box = document.querySelector('div#cf3 div#all');
    Prev.addEventListener('click', prev);
    Next.addEventListener('click', next);


    //prev방향
    function prev() {
        num += targetX;
        if (num === targetX * 2) {
            num = 0
        }
        else if (num > 0) {
            num = targetX;
        }
        setTimeout(motion, 10)
        Prev.style.display = 'none';
        Next.style.display = 'block';
    }

    //next방향
    function next() {
        num -= targetX;
        if (num < 0) {
            num = targetX;
        }
        setTimeout(motion, 10)
        Prev.style.display = 'block';
        Next.style.display = 'none';
    }

    function motion() {
        document.querySelector('div#cf3 div#all').style.left = -num + 'px';
    }
}

function click6() {
    let num = 0;
    let targetX = document.querySelector('div#cf6 figure').clientWidth;

    let Prev = document.querySelector('div#cf6 p.pre');
    let Next = document.querySelector('div#cf6 p.next');

    //복제
    let box = document.querySelector('div#cf6 section.all');
    let temp = document.querySelector('div#cf6 section.all>section').cloneNode(true);

    box.append(temp);

    // prev방향
    function prev() {
        num += targetX;
        if (num > 0) {
            num = targetX * -4;
        }
        setTimeout(motion, 10);
    }
    -4
    //next방향
    function next() {
        num -= targetX;
        if (num < -1177) {
            num = targetX * -1;
        }
        setTimeout(motion, 10);
    }

    //움직임
    function motion() {
        document.querySelector('div#cf6 section.all').style.marginLeft = num + 'px';
    }

    //이벤트
    Prev.addEventListener('click', prev);
    Next.addEventListener('click', next);
}

function click5() {
    let num = 0;
    let height = 0;
    let target = document.querySelector('#cf5 div.show>ul>li>dl').clientWidth;
    let Prev = document.querySelector('div#cf5 p.prev');
    let Next = document.querySelector('div#cf5 p.next');

    // 버튼 산미
    let San0 = document.querySelector('div#cf5 dl.class01>dd>ul>li:nth-child(1)');
    let Sanx = document.querySelector('div#cf5 dl.class01>dd>ul>li:nth-child(2)');
    // 곡물 과일
    let rise = document.querySelector('div#cf5 dl.box01>dd>ul>li:nth-child(1)');
    let apple = document.querySelector('div#cf5 dl.box01>dd>ul>li:nth-child(2)');
    // 강렬함 부드러움
    let fight = document.querySelector('div#cf5 dl.box02>dd>ul>li:nth-child(1)');
    let soft = document.querySelector('div#cf5 dl.box02>dd>ul>li:nth-child(2)');
    // 원두
    let arion = document.querySelector('div#cf5 dl.box03>dd>ul>li:nth-child(1)');
    let double = document.querySelector('div#cf5 dl.box03>dd>ul>li:nth-child(2)');
    let at = document.querySelector('div#cf5 dl.box04>dd>ul>li:nth-child(1)');
    let col = document.querySelector('div#cf5 dl.box04>dd>ul>li:nth-child(2)');
    let kia = document.querySelector('div#cf5 dl.box05>dd>ul>li:nth-child(1)');
    let st = document.querySelector('div#cf5 dl.box05>dd>ul>li:nth-child(2)');
    let il = document.querySelector('div#cf5 dl.box06>dd>ul>li:nth-child(1)');
    let mel = document.querySelector('div#cf5 dl.box06>dd>ul>li:nth-child(2)');

    //prev 방향
    function per() {
        num += target;
        setTimeout(motion, 10);
        if (num == 0) {
            Prev.style.display = 'none';
        }
        if (num > -(target * 3)) {
            Next.style.display = 'block';
        }

    }

    // next 방향
    function next() {
        num -= target;
        setTimeout(motion, 10);
        if (num < 0) {
            Prev.style.display = 'block';
        }
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }

    // x방향
    function move_x() {
        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    // y방향
    function move_y2() {
        height = 450;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y3() {
        height = 900;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y4() {
        height = 1350;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y5() {
        height = 1800;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y6() {
        height = 2250;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y7() {
        height = 2700;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }
    function move_y8() {
        height = 3150;
        setTimeout(motion_Y, 10);

        num -= target;
        setTimeout(motion, 10);
        if (num < -(target * 2)) {
            Next.style.display = 'none';
        }
    }


    // 움직임
    function motion() {
        document.querySelector('#cf5 div.show>ul').style.left = num + 'px';
    }
    function motion_Y() {
        document.querySelector('#cf5 div.show>ul').style.top = -height + 'px';
    }
    // 이벤트
    Prev.addEventListener('click', per);
    Next.addEventListener('click', next);
    San0.addEventListener('click', move_x);
    rise.addEventListener('click', move_x);
    arion.addEventListener('click', move_x);
    Sanx.addEventListener('click', move_y2);
    double.addEventListener('click', move_y2);
    apple.addEventListener('click', move_y2);
    fight.addEventListener('click', move_y3);
    soft.addEventListener('click', move_y4);
    at.addEventListener('click', move_y3);
    col.addEventListener('click', move_y4);
    kia.addEventListener('click', move_y5);
    st.addEventListener('click', move_y6);
    il.addEventListener('click', move_y7);
    mel.addEventListener('click', move_y8);
}





click6()
click1()
click5()