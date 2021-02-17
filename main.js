var mouseEvent = "empty";
var last_position_x,last_position_y;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var colour = "black";
var lineWidth = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    lineWidth = document.getElementById("width").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    var current_x = e.clientX - canvas.offsetLeft;
    var current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = lineWidth;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_position_x = current_x;
    last_position_y = current_y;
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mousedown";
}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
