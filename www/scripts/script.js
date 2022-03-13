$(document).ready(function () {

  // Меню на мобильной версии

  $('.js-burger').on('click', function () {
    $('.js-burger').prev().slideToggle();
  })


  // Аккордион страница вопросов и ответов

  let prevBtn;
  $('.js-accordion-btn').on('click', function () {

    if (prevBtn === $(this)[0]) {
      $(this).next().slideToggle();
      $(this).find('.js-faq-icon').toggleClass('faq-icon-minus');
      return;
    }

    $('.js-accordion-btn').next().slideUp();
    $('.js-faq-icon').removeClass('faq-icon-minus');
    $(this).next().slideDown();
    $(this).find('.js-faq-icon').addClass('faq-icon-minus');
    prevBtn = $(this)[0];
  });

  // Табы на странице контактов

  $('.tabs-link').on('click', function (event) {
    event.preventDefault();

    let index = $(this).index('.tabs-link');

    $('.tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');

  });


  // Слайдер на странице отзывов

  if ($('.js-reviews-wrap').length) {
    $('.js-reviews-wrap').each(function () {
      $(this).find('.js-reviews-content').slick({
        prevArrow: $(this).find('.js-btn-prev'),
        nextArrow: $(this).find('.js-btn-next')
      });
    });
  }


  // Фильтр на странице каталог
  $('.filter-link').on('click', function (event) {
    event.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-pic').show();
      return;
    }

    $('.portfolio-pic').each(function () {
      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });

  });
});
