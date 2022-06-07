$(document).ready(function(){
    $('.rolls__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',

        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         dots: true,
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         dots: true,
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //       }
        //     }
        //   ]
    });
});

