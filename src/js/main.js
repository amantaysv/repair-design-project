$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
  });
  $('.owl-next').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.owl-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  });
});

$('ul.projects__caption').on('click', 'li:not(.projects__tab_active)', function () {
  $(this)
    .addClass('projects__tab_active').siblings().removeClass('projects__tab_active')
    .closest('div.projects__tabs').find('div.projects__content').removeClass('projects__content_active').eq($(this).index()).addClass('projects__content_active');
});

function toggleSlide(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.projects-item__content').eq(i).toggleClass('projects-item__content_active');
      $('.projects-item__about').eq(i).toggleClass('projects-item__about_active');
    });
  });
}

toggleSlide('.projects-item__link');
toggleSlide('.projects-item__back');