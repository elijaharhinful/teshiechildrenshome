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
