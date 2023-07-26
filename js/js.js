$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
        $("#navbar").addClass("noTransparrent");
    } else {
        $("#navbar").removeClass("noTransparrent");
    }
    
});
$(document).ready(function () {
    var wow = new WOW({
      mobile: false,
    });
    wow.init();
  });
 

