mouseEvent = "";
var lastPosX 
var lastPosY
canvas = document.getElementById("myCanvas") 
ctx = canvas.getContext("2d")
color = "red";
widthOfLine = 1

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
mouseEvent = "mousedown"
widthOfLine = document.getElementById("wdth").value
color = document.getElementById("clr").value
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {
mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
   mouseX = e.clientX - canvas.offsetLeft;
   mouseY = e.clientY - canvas.offsetTop;

   if (mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPosX, lastPosY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();


   }
   lastPosX = mouseX;
   lastPosY = mouseY;
}
