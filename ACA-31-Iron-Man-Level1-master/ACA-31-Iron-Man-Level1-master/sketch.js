
let bg, backgroundImg;
let iron, ironmanImage;
let ground;

function preload() {
  backgroundImg = loadImage("./images/bg.jpg");
  ironmanImage = loadImage("./images/iron.png")
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  bg.velocityY = 5;

  iron = createSprite(500,500,20,50);
  iron.addImage(ironmanImage);
  iron.scale = 0.3;

  ground=createSprite(200,585,1500,10);
  //ground.visible=false;
}

function draw() {
  if(keyDown("up")){
    iron.velocityY = -10 
  }
  if(keyDown("right")){
    iron.x = iron.x + 5;
  }
  if(keyDown("left")){
    iron.x = iron.x - 5; 
  }
  iron.velocityY = iron.velocityY + 0.5;

  
  if (bg.y > 700){
    bg.y=20;
  }
   
  iron.collide(ground);

    drawSprites();
   
}

