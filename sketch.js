
var time = 0;
function setup() {

  createCanvas(800,400);
  ball = createSprite(1,1,10,10)
  man = createSprite(400, 200, 50, 50);
}

function draw() {
  if(man.isTouching(ball)){
    ball.destory
  }
  if(keyDown(LEFT_ARROW)){
    man.velocityX= man.velocityX-1;
 }
 if(keyDown(RIGHT_ARROW)){
  man.velocityX= man.velocityX+1;
}
if(keyDown(UP_ARROW)){
  man.velocityY= man.velocityY-1;
}
if(keyDown(DOWN_ARROW)){
  man.velocityY= man.velocityY+1;
}
if(man.x<1){
  man.x=1
  man.velocityX=0
}
if(man.x>800){
  man.x=800
  man.velocityX=0
}
if(man.y>400){
  man.y=400
  man.velocityY=0
}
if(man.y<1){
  man.y=1
  man.velocityY=0
}
  ball.velocityX=60
  ball.velocityY=5
  if(ball.x>800){
    ball.x=1;
    ball.y=ball.y+1;
  }
  if(ball.y>399){
    ball.x=1;
    ball.y=1;
  }
time=time+1;
  if(time%200===0){
    var enemy = createSprite(ball.x,ball.y,10,10); 
  }
  background(255,255,255);  
  drawSprites();
}