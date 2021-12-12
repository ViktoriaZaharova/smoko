$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
    $('.overlay').fadeToggle();
});

$('.btn-close, .links-edit').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".mobile-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(300); // скрываем его
        $('.overlay').fadeOut();
    }
});


$('.links-load').on('click', function (e) {
    e.preventDefault();
    $('.gallery-photo-col:hidden').slice(0, 10).slideDown();

    var onBlock = $('.gallery-photo-col:hidden').length;
    if(onBlock <= 0) {
        $('.links-load').hide();
    }
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
        $('.flavor-card__img').css('display', 'flex');
    } else {
        $('.flavor-card__img').fadeOut();
    }
});

$(document).ready(function () {
    var heightBlock = $('.box-text-hidden').height();
    if (heightBlock > 70) {
        $('.box-text-hidden').addClass('hidden-block');
        $('.box-text-hidden').parent().append('<a href="#" class="color-accent read-view">читать далее</a>');
    }

    $('.read-view').on('click', function (e) {
        e.preventDefault();
        $('.box-text-hidden').removeClass('hidden-block');
        $(this).hide();
    });
});

new WOW().init();






