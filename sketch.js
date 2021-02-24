var background,backgroundImg;
var cat,mouse;
var catImage,mouseImage,mouseImage1,mouseImage2,catImage1,catImage2;
function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImage=loadAnimation("images/cat1.png");
    catImage1=loadAnimation("images/cat2.png","images/cat3.png");
    catImage2=loadAnimation("images/cat4.png");
    mouseImage=loadAnimation("images/mouse1.png");
    mouseImage1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage2=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    background = createSprite(600,400);
    background.addImage("garden",backgroundImg);
    background.scale=1;
    cat=createSprite(500,600);
    cat.addAnimation("cat_sleeping",catImage);
    cat.scale=0.2;
    //create tom and jerry sprites here
    mouse=createSprite(300,600);
    mouse.addAnimation("mouse",mouseImage);
    mouse.scale=0.1;
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImage2);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catImage2");
        mouse.addAnimation("mouseLastImage", mouseImage2);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseImage2");
    }  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImage1);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseTeasing", mouseImage1);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
}

}
