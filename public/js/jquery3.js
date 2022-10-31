function click_1() {
    let button_1 = $('div#main_3>article.main>section.all>section>figure:nth-child(1)');
    let button_2 = $('div#main_3>article.main>section.all>section>figure:nth-child(2)');
    let button_3 = $('div#main_3>article.main>section.all>section>figure:nth-child(3)');
    let button_4 = $('div#main_3>article.main>section.all>section>figure:nth-child(4)');
    let button_5 = $('div#main_3>article.main>section.all>section>figure:nth-child(5)');
    let button_6 = $('div#main_3>article.main>section.all>section>figure:nth-child(6)');
    let button_7 = $('div#main_3>article.main>section.all>section>figure:nth-child(7)');
    let button_8 = $('div#main_3>article.main>section.all>section>figure:nth-child(8)');

    button_1.on('click', function () {
        $('html,body').animate({ scrollTop: 650 }, 500);
    });
    button_2.on('click', function () {
        $('html,body').animate({ scrollTop: 1350 }, 500);
    });
    button_3.on('click', function () {
        $('html,body').animate({ scrollTop: 2050 }, 500);
    });
    button_4.on('click', function () {
        $('html,body').animate({ scrollTop: 2750 }, 500);
    });
    button_5.on('click', function () {
        $('html,body').animate({ scrollTop: 3850 }, 500);
    });
    button_6.on('click', function () {
        $('html,body').animate({ scrollTop: 4900 }, 500);
    });
    button_7.on('click', function () {
        $('html,body').animate({ scrollTop: 6450 }, 500);
    });
    button_8.on('click', function () {
        $('html,body').animate({ scrollTop: 7130 }, 500);
    });
};

