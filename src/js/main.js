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

$('ul.completed-projects__caption').on('click', 'li:not(.completed-projects__tab_active)', function () {
  $(this)
    .addClass('completed-projects__tab_active').siblings().removeClass('completed-projects__tab_active')
    .closest('div.completed-projects__tabs').find('div.completed-projects__content').removeClass('completed-projects__content_active').eq($(this).index()).addClass('completed-projects__content_active');
});

$('ul.fantasies__caption').on('click', 'li:not(.fantasies__tab_active)', function () {
  $(this)
    .addClass('fantasies__tab_active').siblings().removeClass('fantasies__tab_active')
    .closest('div.fantasies__tabs').find('div.fantasies__content').removeClass('fantasies__content_active').eq($(this).index()).addClass('fantasies__content_active');
});

$('div.steps__caption').on('click', 'div:not(.steps__tab_active)', function () {
  $(this)
    .addClass('steps__tab_active').siblings().removeClass('steps__tab_active')
    .closest('div.steps__tabs').find('div.steps__content').removeClass('steps__content_active').eq($(this).index()).addClass('steps__content_active');
});

$('[data-mdb-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});


document.querySelector('.fantasies-burger').addEventListener('click', function () {
  document.querySelector('.fantasies-burger').classList.toggle('active');
  document.querySelector('.fantasies__caption').classList.toggle('active');
});