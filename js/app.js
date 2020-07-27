$('.spoiler').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);
});

$('.spoiler1').hide();

$('.blabla').on('click', function () {
  $('.blabla').hide();
  $('.spoiler1').slideDown(1000);
});
