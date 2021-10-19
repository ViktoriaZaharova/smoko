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

new WOW().init();