function btn1() {
  const btn01 = document.querySelector('div#main3 li.first');
  const btn02 = document.querySelector('div#main3 li.second');

  btn01.addEventListener('click', first);
  btn02.addEventListener('click', second);

  function first() {
    const num2 = document.querySelector('div#main3 figure:nth-child(2)')
    const num4 = document.querySelector('div#main3 figure:nth-child(4)')
    const num6 = document.querySelector('div#main3 figure:nth-child(6)')

    const num1 = document.querySelector('div#main3 figure:nth-child(1)')
    const num3 = document.querySelector('div#main3 figure:nth-child(3)')
    const num5 = document.querySelector('div#main3 figure:nth-child(5)')

    num2.style.display = 'none';
    num4.style.display = 'none';
    num6.style.display = 'none';

    num1.style.display = 'block';
    num3.style.display = 'block';
    num5.style.display = 'block';
  }

  function second() {
    const num1 = document.querySelector('div#main3 figure:nth-child(1)')
    const num3 = document.querySelector('div#main3 figure:nth-child(3)')
    const num5 = document.querySelector('div#main3 figure:nth-child(5)')

    const num2 = document.querySelector('div#main3 figure:nth-child(2)')
    const num4 = document.querySelector('div#main3 figure:nth-child(4)')
    const num6 = document.querySelector('div#main3 figure:nth-child(6)')

    num1.style.display = 'none';
    num3.style.display = 'none';
    num5.style.display = 'none';

    num2.style.display = 'block';
    num4.style.display = 'block';
    num6.style.display = 'block';
  }
}

function btn2() {
  num = 0;
  targetX = document.querySelector('div#main2>#middle').clientWidth;

  const Pre = document.querySelector('div#main2>#middle .pre');
  const Next = document.querySelector('div#main2>#middle .next');

  Pre.addEventListener('click', prev);
  Next.addEventListener('click', next);

  function prev() {
    num = 0;
    num -= targetX * 2;
    setTimeout(motion1, 10)
  }

  function next() {
    num = 0;
    num += targetX;
    setTimeout(motion2, 10)
  }

  function motion1() {
    document.querySelector('div#main2').style.left = num + 'px';
  }
  function motion2() {
    document.querySelector('div#main2').style.left = num - targetX + 'px';
  }
}

function btn3() {
  num = 0;
  targetX = document.querySelector('div#wrap').clientWidth;
  const Pre = document.querySelector('div#main2>div#left>article>div')

  Pre.addEventListener('click', prev);

  function prev() {
    num = 0;
    num = targetX;
    setTimeout(motion, 10)
  }

  function motion() {
    document.querySelector('div#main2').style.left = -num + 'px';
  }
}

function btn4() {
  num = 0;
  targetX = document.querySelector('div#main2>#middle').clientWidth;
  const Next = document.querySelector('div#main2>div#right>article>div')

  Next.addEventListener('click', next);

  function next() {
    num = 0;
    num = targetX;
    setTimeout(motion, 10)
  }

  function motion() {
    document.querySelector('div#main2').style.left = -num + 'px';
  }
}