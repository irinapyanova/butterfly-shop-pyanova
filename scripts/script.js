$(document).ready(function(){

  $('.js-burger').on('click', function(){
    $('.js-burger').prev().slideToggle();
  })


  let prevBtn;
  $('.js-accordion-btn').on('click', function() {

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $(this).next().slideDown();
    prevBtn = $(this)[0];
  });

});
