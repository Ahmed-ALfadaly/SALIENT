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

const anims = document.querySelectorAll('.animated')
const options={ 
  root:null,
  rootMargin:'-200px 0px 200px 0px '
}
const observer = new IntersectionObserver ((entries) =>{
  {
   entries.forEach(el => {
    el.target.classList.toggle('slide', el.isIntersecting)
    if(el.isIntersecting){
      observer.unobserve(el.target)
    }
   })
   } options
})

anims.forEach(anim => {
  observer.observe(anim)
})