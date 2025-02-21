let timestart = performance.now()
$('#categoryBarInner').css({
  width: $('#all').width()
})


$("section.works nav ol.category li").on('click', function(e) {
  $('#categoryBarInner').css({
    width: $('#' + e.currentTarget.id).width(),
    marginLeft: $('#' + e.currentTarget.id).offset().left - $("#categoryBar").offset().left
  });
  let filterValue = $(this).data("filter");
  $("#workCotainer").isotope({ filter: filterValue })
})

$("#workCotainer").isotope({
  isOriginLeft: true,
  itemSelector: '.pf-grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.pf-grid-sizer'
  }
})


//缓动动画
function animate(time) {
  TWEEN.update(time)
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

function animateNavToInTween(y) {
  let coords = { y: window.scrollY };
  const tween = new TWEEN.Tween(coords)
    .to({ y: y }, 1000)
    .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      window.scrollTo(0, coords.y);
    })
    .start()
}

$('#siteNav ul li a').on('click', (e) => {
  e.preventDefault();
  // console.log(e)
  let targetDomId = e.currentTarget.getAttribute('href')
  if (targetDomId[0] === "#") {
    if ($('#siteHeaderWrapper').hasClass('site-header-sticky')) {
      animateNavToInTween($(targetDomId).offset().top - $('#siteHeaderWrapper').height() - $('#siteHeaderWrapper').height() - 40)
    } else {
      animateNavToInTween($(targetDomId).offset().top - $('#siteHeaderWrapper').height() - $('#siteHeaderWrapper').height() - document.documentElement.clientHeight / 100 * 10);
    }
  } else {
    let url = e.currentTarget.getAttribute('href')
    window.open(url, "_blank")
  }

})
if (document.ontouchstart !== null) {
  $('#siteNav').addClass('pcAnimate')
}
window.onload = function() {
  let timeEnd = performance.now()
  let timeouter = 1500 - timeEnd + timestart
  if (timeouter < 0) {
    timeouter = 0
  }

  setTimeout(() => {
    $('#siteWelcome').hide()
    document.onscroll = (e) => {
      if (window.scrollY > 0) {
        $(".site-header-wrapper").addClass("site-header-sticky");
      } else {
        $(".site-header-wrapper").removeClass("site-header-sticky");
      }

      let deviceHeight = document.documentElement.clientHeight - $('#siteHeaderWrapper').height();
      let scrollY = window.scrollY;
      let listenPointY = (scrollY + deviceHeight) / 2;
      let navDom = $('[data-nav]');
      let len = navDom.length;
      let minIndex = 0;
      let minVuales = Math.abs((navDom.eq(0).offset().top + navDom.eq(0).height()) / 2 - listenPointY);

      for (let i = 0; i < len; i++) {
        if (Math.abs((navDom.eq(i).offset().top + navDom.eq(i).height()) / 2 - listenPointY) < minVuales) {
          minVuales = Math.abs((navDom.eq(i).offset().top + navDom.eq(i).height()) / 2 - listenPointY);
          minIndex = i;
        }
        if (navDom.eq(i).offset().top - scrollY <= listenPointY) {
          navDom.eq(i).addClass('no-offsetY')
        }
      }
      $("#siteNav li").removeClass('highlight');
      let currId = navDom.eq(minIndex).attr('id');
      $(`#siteNav a[href="#${currId}"]`).parent().addClass('highlight');
    }
    //解决safari 浮动没有清除的问题
    $("#workCotainer").isotope({ filter: "*" })
    window.scrollTo(0, 0);
  }, timeouter);
}
