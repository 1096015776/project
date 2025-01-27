document.onscroll = (e) => {
  if (window.scrollY > 0) {
    $(".site-header-wrapper").addClass("site-header-sticky")
  } else {
    $(".site-header-wrapper").removeClass("site-header-sticky")
  }
}
