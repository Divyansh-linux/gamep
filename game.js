const canvas = getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5

class Player{
        constructor() {
  this.position = {x: 100, y:100}
  this.velocity = {x: 0, y: 0};
  this.width=100;
  this.height=100;
  }

draw(){
 context.fillStyle = "red";
 context.fillRect(this.position.x, this.position.y, this.height, this.width);
   }

update() {
  this.position.x+=this.position.x;
  this.position.y+ = this.velocity.y;

  if(this.position.y+this.height+this.velocity.y<= canvas.height){
  this.velocity.y+ = garvity;
  }
else{this.velocity.y=0};
  this.draw();
}
}

class Platform{
constructor(){
this.position= {x:0, y:0};
this.width=300;
this.height=20 
}

draw(){
context.fillStyle = "blue";
context.fillRect(this.positio.x, this.position.y, this.width, this.height);
}
}


const player = new Player()

function animation () {
 requestAnimationFrame(animate);
 context.clearRect(0, 0, canvas.width, canvas.height);
 player.update();
 platform.draw();

if (player.position.y+player.height<= platform.position.y && 
    player.velocity.y+player.height>= platform.position.y &&
    player.position.x+player.width>=platform.position.x &&
     player.position.x<= platform.position.x+platform.width);
{player.velocity.y = 0}
}

animation();

addEventListener("keydown",function(event){
    if (event.key=="ArrowUp") {  this.velocity.y= -15}

    else if (event.key=="ArrowLeft") {  this.velocity.x= -5}

    else if (event.key=="ArrowRight") {  this.velocity.x=+5}
})
addEventListener("keyup",function(event){
    if (event.key=="ArrowUp") {  this.velocity.y= 0}

    else if (event.key=="ArrowLeft") {  this.velocity.x= 0}

    else if (event.key=="ArrowRight") {  this.velocity.x=0}
})