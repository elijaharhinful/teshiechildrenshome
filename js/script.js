// js for preloader
$(window).on("load", function () {
  // Remove the preloader
  $(".preloader").fadeOut("slow", function () {
    // Remove the loading class from body
    $("body").removeClass("loading");
    // Remove preloader from DOM after fade out
    $(this).remove();
  });
});

// Add this when the document is ready
$(document).ready(function () {
  // Add loading class to body
  $("body").addClass("loading");
});

// javascript for tabs
$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

// carousel js
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

// animations
var slideUp = {
  distance: "200%",
  origin: "bottom",
  opacity: null,
};

var slideDown = {
  distance: "150%",
  origin: "top",
  opacity: null,
};

var slideRight = {
  distance: "180%",
  origin: "left",
  opacity: 0.3,
  delay: 400,
};

var slideLeft = {
  distance: "180%",
  origin: "right",
  opacity: 0.3,
};

var fadeIn = {
  delay: 1000,
};

var fadeInDelay1 = {
  delay: 1300,
};

var fadeInDelay2 = {
  delay: 1600,
};

ScrollReveal().reveal(".fadeIn", fadeIn);
ScrollReveal().reveal(".fadeInDelay1", fadeInDelay1);
ScrollReveal().reveal(".fadeInDelay2", fadeInDelay2);
ScrollReveal().reveal(".slideRight", slideRight);
ScrollReveal().reveal(".slideLeft", slideLeft);
ScrollReveal().reveal(".slideUp", slideUp);

// collapsable nav
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-container a");

  // Toggle navigation when hamburger is clicked
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navContainer.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  // Close navigation when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navContainer.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
});

// Optional: Close navigation when clicking outside
document.addEventListener("click", function (event) {
  const navContainer = document.querySelector(".nav-container");
  const hamburger = document.querySelector(".hamburger");

  if (
    !navContainer.contains(event.target) &&
    !hamburger.contains(event.target) &&
    navContainer.classList.contains("active")
  ) {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

//fancybox script
Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "thumbs", "close"],
    },
  },
});
