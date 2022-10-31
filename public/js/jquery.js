// aside
function navAside() {
  $('#btn').on('click', function () {
    $('aside').animate({ left: 0 }, 100, function () {
      $('aside').toggle();
    });
  });
}

// 검색
function surch() {
  let clic = $('nav.btn1>ul>li:last')
  // 검색하면 창 이상해짐
  clic.on('click', function () {
    $('div#background').animate({ top: 75 }, 100, function () {
      $('div#background').toggle();
    });
  });
}

// cf1번 
function navCoffe1() {


  $('.dl2>dd:first').addClass('select');

  $('div#cf1 .dl2>dd').on('click', function (e) {
    let num = $(this).attr('name');
    console.log(num);
    if (num === 'back01') {
      // 선택자 cf1 -> background-image:url();
      $('div#cf1').css('background-image', 'url(./img/back1.jpg)');
    } else {
      $('div#cf1').css('background-image', 'url(./img/back1_1.jpg)');
    }

    $('.dl2>dd').removeClass('select');
    $(this).addClass('select');
  });

}

// cf4번 
function navCoffe4() {
  let ch2 = $('div#cf4>article>dl.dl2>dd:nth-child(2)');
  let ch3 = $('div#cf4>article>dl.dl2>dd:nth-child(3)');

  ch2.on('click', function () {
    ch2.css({ 'backgroundColor': 'rgba(231, 213, 168, 0.5)', 'color': 'rgb(112, 98, 98)' });
    ch3.css({ 'backgroundColor': 'rgb(236, 230, 213)', 'color': '#fff' });
    $('div#cf4>article>article#cf4_1').show();
    $('div#cf4>article>article#cf4_2').hide();
  })
  ch3.on('click', function () {
    ch3.css({ 'backgroundColor': 'rgba(231, 213, 168, 0.5)', 'color': 'rgb(112, 98, 98)' });
    ch2.css({ 'backgroundColor': 'rgb(236, 230, 213)', 'color': '#fff' });
    $('div#cf4>article>article#cf4_1').hide();
    $('div#cf4>article>article#cf4_2').show();
  })
}

// reate
function react1() {
  let click1 = $('div#root>div>div button.first');
  let click2 = $('div#root>div>div button.second');
  console.log(click1);

  click1.on('click', function () {
    click2.hide();
  })
}


