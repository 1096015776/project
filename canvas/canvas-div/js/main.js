var canvas = document.getElementById("canvas");
var isPainting = false

document.onmousedown = (e) => {
  isPainting = true;
}
document.onmousemove = (e) => {
  if (isPainting) {
    paintByPoint(e);
  }
}
document.onmouseup = (e) => {
  isPainting = false;
}

function paintByPoint(e) {
  let newPoint = document.createElement("div");
  newPoint.className = "point";
  newPoint.style.left = e.clientX - 3 + "px";
  newPoint.style.top = e.clientY - 3 + "px";
  canvas.appendChild(newPoint);
}
