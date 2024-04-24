$(document).ready(function(){
  $(".faqList__item__que").click(function(){
    $(this).siblings().slideToggle();
    $(this).children(".que").toggleClass("active");
  });
});