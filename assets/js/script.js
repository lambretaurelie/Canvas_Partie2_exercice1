var c = document.getElementById( "iceCream" );
var ctx = c.getContext("2d");

// rond1
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "#8A0908";
ctx.fillStyle = "#8A0908";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,30,300,200);
ctx.stroke();
ctx.fill();
// triangle
ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(200,350);
ctx.lineTo(300,200);
ctx.closePath();
ctx.fillStyle = "#AA6522";
ctx.fill();
