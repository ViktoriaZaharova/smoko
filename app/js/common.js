$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close, .links-edit').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.menu-brands a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.tooltip-box').tooltip();


$('[name="phone"]').mask('+7 (999) 999-99-99');


$('.label-toggle').click(function() {
    var element = $('.toggle-input');

    if(element.is(':checked')) {
        $('.flavor-card__img').fadeOut();
    } else {
        $('.flavor-card__img').css('display', 'flex');
    }
});


new WOW().init();

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".mobile-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
    }
});

