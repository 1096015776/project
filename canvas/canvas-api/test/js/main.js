var isPainting = false;
var lastPoint = null;
var isEraser = false;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

initCanvas();
window.onresize = () => {
  initCanvas();
}
var eraser = document.getElementById("eraser");
var paintPencil = document.getElementById("paintPencil");

eraser.onclick = () => {
  isEraser = false;
  eraser.parentElement.className = "action";
}

paintPencil.onclick = () => {
  isEraser = true;
  eraser.parentElement.className = "action useEraser";
}

document.onmousedown = (e) => {
  lastPoint = {
    x: e.clientX,
    y: e.clientY
  }
  isPainting = true;
}
document.onmousemove = (e) => {
  if (isPainting) {
    if (isEraser) {
      clearByEraser(e)
    } else {
      paintByLine(e);
    }
  }
  var x = e.clientX;
  var y = e.clientY;
  lastPoint = {
    x, y
  }
}
document.onmouseup = (e) => {
  isPainting = false;
}

function paintByPoint(e) {
  var x = e.clientX;
  var y = e.clientY;
  canvas.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI)
  ctx.closePath();
  ctx.fill();
  // ctx.closePath();
}

function paintByLine(e) {
  var x = e.clientX;
  var y = e.clientY;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(lastPoint.x, lastPoint.y)
  ctx.lineTo(x, y)
  ctx.stroke();
  ctx.closePath();
}

function clearByEraser(e) {
  var x = e.clientX;
  var y = e.clientY;
  ctx.clearRect(x - 5, y - 5, 10, 10);
}

function initCanvas() {
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;
  canvas.width = pageWidth;
  canvas.height = pageHeight;
}
