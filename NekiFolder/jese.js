yOffset = window.pageYOffset;
console.log(yOffset);
window.addEventListener("scroll", () => {
  yOffset = window.pageYOffset;
  console.log(yOffset);
});

/*jQuery(document).ready(function ($) {
  $("#checkbox").change(function () {
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();
  var slideHeight = $("#slider ul li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });
});*/

/*Neki drugi kod

function moveLeft2() {
  $("#background-slideshow").animate(
    {
      left: +slideWidth,
    },
    200,
    function () {
      $("#background-slideshow img:last-child").prependTo("#slider ul");
      $("background-slideshow img").css("left", "");
    }
  );
}

$("#prev").click(function (e) {
  moveLeft2();
});
$("#next").click(function (e) {
  e.preventDefault();
  $("#home-image").slideDown();

  $("#watch-image").slideUp();
});

/*var indexer = 0;
var animateInterval;

function animate() {
  if (indexer == 0) {
    $("#background-slideshow > #watch-image").fadeOut(2000);
    $("#background-slideshow > #home-image").fadeIn(2000);
  } else if (indexer == 1) {
    $("#background-slideshow > #home-image").fadeOut(2000);
    $("#background-slideshow > #shop-image").fadeIn(2000);
  } else if (indexer == 2) {
    $("#background-slideshow > #shop-image").fadeOut(2000);
    $("#background-slideshow > #dine-image").fadeIn(2000);
  } else if (indexer == 3) {
    $("#background-slideshow > #dine-image").fadeOut(2000);
    $("#background-slideshow > #watch-image").fadeIn(2000);
  }

  if (indexer == 3) indexer = 0;
  else indexer++;
}

animateInterval = setInterval(animate, 10000);
animate();

$(document).ready(function () {
  console.log("OK");
});*/
