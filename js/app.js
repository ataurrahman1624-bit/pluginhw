$(document).ready(function(){
  $('.all').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: $('.left'),
    nextArrow: $('.right'),
    centerMode: true,
     centerPadding: '0px',
     dots: true,
     dotsClass: 'my-dots'
  });
});
new TypeIt("#simpleUsage", {
    strings: "This is my Homework",
    speed: 50,
    waitUntilVisible: true,
}).go();

