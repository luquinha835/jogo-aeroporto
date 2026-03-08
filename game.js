const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {x:300,y:300,size:40};
let running=false;

function startGame(){
document.getElementById("menu").style.display="none";
running=true;
loop();
}

function respawn(){
player.x=300;
player.y=300;
}

document.addEventListener("keydown",e=>{
if(e.key==="ArrowLeft") player.x-=10;
if(e.key==="ArrowRight") player.x+=10;
if(e.key==="ArrowUp") player.y-=10;
if(e.key==="ArrowDown") player.y+=10;
});

function drawAirport(){

ctx.fillStyle="gray";
ctx.fillRect(0,canvas.height-200,canvas.width,200);

ctx.fillStyle="white";
ctx.fillRect(canvas.width/2-200,canvas.height-260,400,60);

ctx.fillStyle="black";
ctx.font="30px Arial";
ctx.fillText("AEROPORTO",canvas.width/2-90,canvas.height-220);

}

function drawPlayer(){
ctx.fillStyle="blue";
ctx.fillRect(player.x,player.y,player.size,player.size);
}

function loop(){

if(!running) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

drawAirport();
drawPlayer();

requestAnimationFrame(loop);
}
