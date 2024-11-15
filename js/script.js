$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<button type="button" class="slick-prev"> </button>',
    nextArrow: '<button type="button" class="slick-next"> </button>',
  });
});

var slideUp = {
  distance: '200%',
  origin: 'bottom',
  opacity: null,
};

var slideDown = {
  distance: '150%',
  origin: 'top',
  opacity: null,
};

var slideRight = {
  distance: '180%',
  origin: 'left',
  opacity: 0.3,
  delay: 400,
};

var slideLeft = {
  distance: '180%',
  origin: 'right',
  opacity: 0.3,
};

var fadeIn = {
  delay: 1000,
};

var fadeInDelay1 = {
  delay: 1300,
}

var fadeInDelay2 = {
  delay: 1600,
}


ScrollReveal().reveal('.fadeIn', fadeIn);
ScrollReveal().reveal('.fadeInDelay1', fadeInDelay1);
ScrollReveal().reveal('.fadeInDelay2', fadeInDelay2);
ScrollReveal().reveal('.slideRight', slideRight);
ScrollReveal().reveal('.slideLeft', slideLeft);
ScrollReveal().reveal('.slideUp', slideUp);