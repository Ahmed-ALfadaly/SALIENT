$(window).scroll(function () {
  if ($(this).scrollTop() >= 400) {
    $("#navbar").addClass("noTransparent");
  } else {
    $("#navbar").removeClass("noTransparent");
  }
});
//================================

$(document).ready(function () {
  var wow = new WOW({
  });
  wow.init();
});
//preloader event ------------------------------------//
// will first fade out the loading animation
$("#loading-animation").fadeOut();
// will fade out the whole DIV that covers the website.
$("#preloader").delay(600).fadeOut("slow");

