
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,180,50,50)
  trex.addAnimation("running trex",trex_running)
  trex.scale=0.5;
  trex.velocity
  //create a trex sprite
 
}

function draw(){
  background("white")
  drawSprites()

}
