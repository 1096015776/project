let swiperPrev = $("#swiperPrev");
let swiperNext = $("#swiperNext");

swiperPrev.on('click', () => {
  sliderPlay(-1);
});
swiperNext.on('click', () => {
  sliderPlay(1);
});

let swiperImgs = $(".swiper-container img");
let swiperCount = swiperImgs.length;
let currentPlay = swiperCount - 1;
function sliderPlay(dis) {
  let disPlay = (currentPlay + swiperCount + dis) % swiperCount;
  //初始化移除所有样式
  swiperImgs.removeClass("swiper-trans");
  swiperImgs.removeClass("swiper-left");
  swiperImgs.removeClass("swiper-right");
  //轮播动画
  swiperImgs.eq(currentPlay).addClass("swiper-trans");
  swiperImgs.eq(disPlay).addClass("swiper-trans");
  swiperImgs.eq(currentPlay).addClass(dis === 1 ? "swiper-left" : "swiper-right");
  //下次轮播准备
  currentPlay = disPlay;
  disPlay = (currentPlay + swiperCount + dis) % swiperCount
  swiperImgs.eq(disPlay).addClass(dis === 1 ? "swiper-right" : "swiper-left");
}

//自动播放
let valer = setInterval(() => {
  swiperNext.click();
}, 1500);
$("#swiperContainer").on("mouseover", () => {
  clearInterval(valer);
});
$("#swiperContainer").on("mouseleave", () => {
  valer = setInterval(() => {
    swiperNext.click();
  }, 1500);
});
