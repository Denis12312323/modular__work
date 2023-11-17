
$('.top-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type = "button" class = "slick-next"><img src="img/next.png" alt=""></button>',
    prevArrow: '<button type = "button" class = "slick-prev"><img src="img/prev.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            }
        },
        {
            breakpoint: 640,
            settings: {
            }
        },
    ]
});








$('.header__burger').click(function (event){
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
});
