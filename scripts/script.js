$(document).ready(function(){

  // Меню на мобильной версии

  $('.js-burger').on('click', function(){
    $('.js-burger').prev().slideToggle();
  })


  // Аккордион страница вопросов и ответов

  let prevBtn;
  $('.js-accordion-btn').on('click', function() {

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

  $('.tabs-link').on('click', function(event) {
    event.preventDefault();

    let index = $(this).index('.tabs-link');

    $('.tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');

  });


  // Слайдер на странице отзывов

  if ( $('.js-reviews-wrap').length) {
    $('.js-reviews-wrap').each(function() {
      $(this).find('.js-reviews-content').slick({
        prevArrow: $(this).find('.js-btn-prev'),
        nextArrow: $(this).find('.js-btn-next')
      });
    });
  }


  // Фильтр на странице каталог
  $('.filter-link').on('click', function(event) {
    event.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-pic').show();
      return;
    }

    $('.portfolio-pic').each(function(){
      let itemType = $(this).data('type');

      if (linkType === itemType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });

  });

  // Подгрузка элементов на странице catalog

  $('.js-btn-catalog').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/json/catalog.json',
      data: 'count=4',
      success: function(response){
        let html = createHtml(response);
        addToHtml(html);
        button.text('Больше бабочек');
      },
      error: function(){}
    });

    function addToHtml(string) {
      $('.js-portfolio-images-wrap').append(string);
    }

    function createHtml(data) {
      let dataArray = data.catalog;
      let htmlString = '';

      dataArray.forEach(function(item){
        htmlString = htmlString + `<div class="portfolio-pic" data-type="${item.dataType}">
          <figure class="portfolio-figure">
              <img src="${item.imageUrl}" alt="${item.imageAlt}" class="portfolio-img">
              <figcaption class="portfolio-pic-desc">${item.description}</figcaption>
          </figure>
        </div>`;
      });

      return htmlString;
    }

  });
});
