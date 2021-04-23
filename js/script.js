"use strict";

// slider
$(function () {
  $("#slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 0,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});



// アコーディオン
$(function () {
  $(".js-accordion").click(function () {
    // $(this).toggleClass("active");
    $(this).next().slideToggle(500);
  });
});



// ハンバーガーメニュー
$(".menu-trigger").on("click", function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(".gloval-nav, .gloval-list").css({
      visibility: "visible",
      opacity: 1,
    });
  } else {
    $(".gloval-nav, .gloval-list").css({
      visibility: "hidden",
      opacity: 0,
    });
  }
  return false;
});


// AOS
AOS.init({
  duration: 1500,
});