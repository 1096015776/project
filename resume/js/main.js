setTimeout(() => {
  $('#siteWelcome').hide()
}, 2000);
document.onscroll = (e) => {
  if (window.scrollY > 0) {
    $(".site-header-wrapper").addClass("site-header-sticky")
  } else {
    $(".site-header-wrapper").removeClass("site-header-sticky")
  }
}
$('#categoryBarInner').css({
  width: $('#all').width()
})

$("#all").on('click', () => {
  $('#categoryBarInner').css({
    width: $('#all').width(),
    marginLeft: '0px'
  })
});

$("#framework").on('click', () => {
  $('#categoryBarInner').css({
    width: $('#framework').width(),
    marginLeft: $('#framework').offset().left - $("#categoryBar").offset().left
  })
});

$("#originJs").on('click', () => {
  $('#categoryBarInner').css({
    width: $('#originJs').width(),
    marginLeft: $('#originJs').offset().left - $("#categoryBar").offset().left
  })
});
