$(document).ready(function(){
  $('.cta__slider').slick({
  fade: true,
  dots:true,
  autoplay: true,
  autoplaySpeed: 4000,
  });

});

$('.burger').on('click', function(){
console.log('click');
$('.header').toggleClass('mobile')
});