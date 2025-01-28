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


$("section.works nav ol.category li").on('click', (e) => {
  $('#categoryBarInner').css({
    width: $('#' + e.currentTarget.id).width(),
    marginLeft: $('#' + e.currentTarget.id).offset().left - $("#categoryBar").offset().left
  })
})

