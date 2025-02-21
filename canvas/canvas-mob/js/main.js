window.onload = () => {
  var isPainting = false;
  var lastPoint = null;
  var isEraser = false;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var fillColor = "red";
  var lineWidth = 3;
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var line1 = document.getElementById("line1")
  var line2 = document.getElementById("line2")
  line1.onclick = () => {
    line1.className="line1 activeLine";
    line2.className="line2";
    lineWidth = 3;
  }
  line2.onclick = () => {
    line2.className="line2 activeLine";
    line1.className="line1";
    lineWidth = 6;
  }
  red.onclick = () => {
    fillColor = "red"
    red.className = "red active"
    green.className = "green"
    blue.className = "blue"
  }
  green.onclick = () => {
    fillColor = "green"
    green.className = "green active"
    red.className = "red"
    blue.className = "blue"
  }
  blue.onclick = () => {
    fillColor = "blue"
    blue.className = "blue active"
    red.className = "red";
    green.className = "green";
  }
  function mousedown(e) {
    lastPoint = {
      x: e.clientX,
      y: e.clientY
    }
    isPainting = true;
  }

  function mouseup(e) {
    isPainting = false;
  }

  function mousemove(e) {
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

  initCanvas();
  if (document.body.ontouchstart !== undefined) {
    listenTouch()
  } else {
    listenMouse()
  }
  window.onresize = () => {
    initCanvas();
  }
  var eraser = document.getElementById("eraser");
  var paintPencil = document.getElementById("paintPencil");
  var remove = document.getElementById("remove");
  remove.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  var download = document.getElementById("download");
  download.onclick = () => {
    var imgUrl = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.href = imgUrl;
    link.download = "canvas_image.png";
    link.target ="_blank";
    link.click();
  }

  eraser.onclick = () => {
    eraser.className = 'checked';
    paintPencil.className = '';
    isEraser = true;
  }

  paintPencil.onclick = () => {
    eraser.className = '';
    paintPencil.className = 'checked';
    isEraser = false;
  }


  function paintByPoint(e) {
    var x = e.clientX;
    var y = e.clientY;
    canvas.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI)
    ctx.closePath();
    ctx.fill();
  }

  function paintByLine(e) {
    var x = e.clientX;
    var y = e.clientY;
    ctx.strokeStyle = fillColor;
    ctx.lineWidth = lineWidth;
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
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function listenTouch() {
    canvas.ontouchstart = (e) => {
      e.clientX = e.touches[0].clientX
      e.clientY = e.touches[0].clientY
      mousedown(e);
    }
    canvas.ontouchend = (e) => {
      e.clientX = e.touches[0].clientX
      e.clientY = e.touches[0].clientY
      mouseup(e);
    }
    canvas.ontouchmove = (e) => {
      e.clientX = e.touches[0].clientX
      e.clientY = e.touches[0].clientY
      mousemove(e)
    }
  }

  function listenMouse() {
    document.onmousedown = mousedown;
    document.onmousemove = mousemove;
    document.onmouseup = mouseup;
  }

}
