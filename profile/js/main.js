all.onclick = () => {
  categoryBar.className = "categoryBar-inner state1"
}
framework.onclick = () => {
  categoryBar.className = "categoryBar-inner state2"
}
originJs.onclick = () => {
  categoryBar.className = "categoryBar-inner state3"
}
//滚动高亮
let aboutHeight = document.querySelector("#about").offsetTop;
function scrollAnimate(){
  let minDis = Math.abs(window.scrollY - aboutHeight);
  let minIndex = 0;
  let specialElements = document.querySelectorAll('[data-nav]');
  for (let i = 1; i < specialElements.length; i++) {
    if (Math.abs(specialElements[i].offsetTop - window.scrollY) < minDis) {
      minIndex = i;
      minDis = Math.abs(specialElements[i].offsetTop - window.scrollY);
    }
  }
  specialElements[minIndex].classList.add('nooffset')
  let navDom = document.querySelector('header nav a[href="#'+specialElements[minIndex].id+'"]');
  let navDoms = document.querySelectorAll('header nav a');
  for(let i = 0;i<navDoms.length;i++){
    navDoms[i].parentElement.classList.remove('highlight');
  }
  navDom.parentElement.classList.add('highlight')
}

let timeout = 1200;
setTimeout(() => {
  siteWelcome.classList.remove('active');
  window.scrollTo(0,0);
  scrollAnimate();
  document.onscroll = () => {
    if (window.scrollY > 0) {
      topBar.classList.add("sticky")
    } else {
      topBar.classList.remove("sticky")
    }
    scrollAnimate()
  }
}, timeout)

//二级菜单显示
let elements = document.querySelectorAll('.menutrigger');
for (let i = 0; i < elements.length; i++) {
  elements[i].onmouseenter = (e) => {
    e.currentTarget.classList.add('active');
    e.currentTarget.lastElementChild.classList.add("active")
  }
  elements[i].onmouseleave = (e) => {
    e.currentTarget.classList.remove('active');
    e.currentTarget.lastElementChild.classList.remove("active")
  }
}

let navElements = document.querySelectorAll('.navTo');
for (let i = 0; i < navElements.length; i++) {
  navElements[i].onclick = (e) => {
    e.preventDefault()
    let targetElementId = e.currentTarget.getAttribute('href');
    if (targetElementId !== "#") {
      let targetElement = document.querySelector(e.currentTarget.getAttribute('href'));
      animateNavToInTween(targetElement.offsetTop - 80);
    }
  }
}

function animateNavTo(y) {
  let time = 1000;
  let n = 500;
  let distance = y - window.scrollY;
  let stepDistance = distance / n;
  let i = 0;
  let timer = setInterval(() => {
    window.scrollTo(0, window.scrollY + stepDistance)
    i++;
    if (i === n) {
      clearInterval(timer)
    }

  }, time / n)

}
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
