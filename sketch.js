var canvas,cat,mouse,I,I1,I2,I3,I4,I5,I6;
var bg
function preload() {
    //load the images here
    I=loadAnimation('images/cat1.png')
    I2=loadAnimation('images/mouse1.png')
    I3=loadAnimation('images/mouse2.png',"images/mouse3.png")
    I4=loadAnimation('images/cat2.png',"images/cat3.png")
    I5=loadAnimation('images/mouse4.png')
    I6=loadAnimation('images/cat4.png')
    bg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation(I);
    cat.scale=0.2

    mouse = createSprite(200,600)
    mouse.addAnimation(I1)
    mouse.scale= 0.15

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x = mouse.x < (cat.width - mouse.width)/2){
  cat.velocityX=0
  cat.addAnimation("catlastImage",I6)
  cat.x = 300
  cat.scale = 0.2;
  cat.changeAnimation("catlastImage")
  mouse.addAnimation("mouselastImage",I5)
  mouse.scale= 0.15;
  mouse.changeAnimation("mouselastImage")



}



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
cat.velocityX=-5;
cat.addImage("catRunning",I4)
cat.changeAnimation("catRunning")

mouse.addImage('mouseRunning',I3)
mouse.frameDelay = 25;
mouse.changeAnimation("mouseRunning")

}

}
