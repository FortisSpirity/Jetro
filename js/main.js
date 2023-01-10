$(function () {
  $('.slider__inner-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-inner__bottom',
    prevArrow: '<button class="slick-arrow slick-left"><img src="images/slider-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-right"><img src="images/slider-next.svg" alt=""></button>',
  });

  $('.slider-inner__bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    asNavFor: '.slider__inner-top',
    focusOnSelect: true,
  });

  $('.header__menu-btn').on('click', function() {
    $('.header__menu ul').slideToggle(); 
      
  });
});