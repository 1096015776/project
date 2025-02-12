let code = document.getElementById("code");
let styleTag = document.getElementById("styleTag");
let codeString = `
/**
*
* 大家好呀，今天用css画一个皮卡丘吧
* */

/* 先将画纸染成皮卡丘的颜色吧 */
body {
  background-color: #FFE034;
}

/* 设置画画容器居中 */
.pika-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60dvh;
}

/* 设置皮卡丘的高度 */
.pika-container .wrapper {
  width: 100%;
  height: 165px;
  position: relative;
}

/* 先画个皮卡丘的鼻子吧 */
.pika-container .nose {
  width: 0px;
  height: 0px;
  border: 11px solid black;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  top: 28px;
  left: 50%;
  margin-left: -11px;
}

/* 接下来该画皮卡丘的眼睛了 */
.pika-container .eye {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  position: absolute;
  background-color: #2e2e2e;
}

/* 将眼睛移到左边 */
.pika-container .eye.left {
  right: 50%;
  margin-right: 90px;
}

/* 将眼睛移到右边 */
.pika-container .eye.right {
  left: 50%;
  margin-left: 90px;
}

/* 还没有点睛，马上马上 */
.pika-container .eye::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  background-color: white;
  top: 2px;
}

/* 接着该画红色的脸蛋了 */
.pika-container .face {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #FF332C;
  position: absolute;
  top: 85px;
}

/* 将脸蛋移到左边 */
.pika-container .face.left {
  right: 50%;
  margin-right: 116px;
}

/* 将脸蛋移到右边 */
.pika-container .face.right {
  left: 50%;
  margin-left: 116px;
}

/* 稍等下，----我歇歇，开始画皮卡丘的上嘴唇了 */
.pika-container .upperLip {
  position: absolute;
  background-color: #FFE034;
  height: 25px;
  width: 80px;
  border: 2px solid black;
  top: 48px;
}

/* 画左边的上嘴唇 */
.pika-container .upperLip.left {
  transform: rotate(-20deg);
  border-bottom-left-radius: 40px 20px;
  border-top: none;
  border-right: none;
  right: 50%;
}

/* 画右边的上嘴唇 */
.pika-container .upperLip.right {
  transform: rotate(20deg);
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 40px 20px;
  left: 50%;
}

/* 画皮卡丘的下嘴唇 */
.pika-container .lowerLip-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  z-index: -1;
  height: 110px;
  overflow: hidden;
}

.pika-container .lowerLip {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3500px;
  background-color: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  overflow: hidden;
}

/* 最后画皮卡丘的舌头 */
.pika-container .lowerLip::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background-color: #fc4a62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/* -----------大功告成啦,pika,pika------------ */
`
let n = 0;
function printCode() {
  n++;
  let codeContent = codeString.substring(0, n);
  styleTag.innerHTML = codeContent;
  code.innerHTML = Prism.highlight(codeContent, Prism.languages.css);
  code.scrollTop = code.scrollHeight;
  setTimeout(() => {
    if (codeString.length !== n) {
      printCode()
    }
  }, $('.codePreview .option button.active').attr('data-target') - 0)
}
printCode()
$('.codePreview .option button').on('click', (e) => {
  $('.codePreview .option button').removeClass("active")
  e.currentTarget.classList.add("active")

})

