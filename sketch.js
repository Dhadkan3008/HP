var bg,bgImg;
var ground,groundImg;
var ron, ronImage;
var chessImg1,chessImg2,chessImg3,chessImg4,chessImg5;
var bg2,bg2Img;
var hermioneImg;
var dracoImg;
var life1,life1Img;
var life2,life2Img;
var life3,life3Img;
var chessGroup;
var chessGroup1;
var chessGroup2;
var chessGroup3;
var chessGroup4;


var STAGE0 = -1;
var STAGE1 = 0;
var STAGE2 = 1;
var STAGE3 = 2;
var gameState = 0;

var score = 0;

function preload(){
bgImg = loadImage("bg.jpg");
groundImg = loadImage("ground1.png")
ronImage = loadImage("ron.png");
chessImg1 = loadImage("Chess.png");
chessImg2 = loadImage("Chess1.png");
chessImg3 = loadImage("Chess2.png");
chessImg4 = loadImage("Chess3.png");
chessImg5 = loadImage("chess4.png");
hermioneImg = loadImage("hermione.png");
dracoImg = loadImage("draco.png");
bg2Img = loadImage("bg2.jpg");
life1Img = loadImage("life1.png");
life2Img = loadImage("life2.png");
life3Img = loadImage("life3.png");
}

function setup() {
    createCanvas(600,400);
    
    bg = createSprite(600,200,10,10);
    bg.x = bg.width/2;
    bg.addImage(bgImg);
    bg.scale = 1;
    bg.velocityX = -3;
  
    ron = createSprite(25,250);
    ron.velocityX = 0;
    ron.addImage(ronImage);
    ron.scale = 0.9;
    
    life1 = createSprite(400,50);
    life1.addImage(life1Img);
    life1.scale = 0.1;

    life2 = createSprite(450,50);
    life2.addImage(life2Img);
    life2.scale = 0.1;

    life3 = createSprite(500,50);
    life3.addImage(life3Img);
    life3.scale = 0.1;

    chessGroup = new Group();
    chessGroup1 = new Group();
    chessGroup2 = new Group();
    chessGroup3 = new Group();
    chessGroup4 = new Group();
  }
  
  function draw() {
    background("white")
    
    if (gameState === STAGE1){

    score = score + Math.round(getFrameRate()/60);

  if(bg.x <250){
    bg.x = bg.width/2;
    }

    if(ron.isTouching(chessGroup) ){
    life1.visible = false;
    
    }

var select_chess = Math.round(random(1,5));
  if (World.frameCount % 60 == 0) {
    if (select_chess == 1) {
      chess();
    } else if (select_chess == 2) {
     chess1();
    } else if (select_chess == 3) {
      chess2();
    } else if (select_chess == 4){
      chess3();
    }else {
      chess4();
    }
  }

  if(keyDown("UP_ARROW")){
    ron.velocityY = -2;
  }

  if(keyDown("DOWN_ARROW")){
    ron.velocityY = 2;
  }

  if(keyDown("RIGHT_ARROW")){
    ron.velocityX = 2;
  }

  if(keyDown("LEFT_ARROW")){
    ron.velocityX = -2;
  }
  
  if (score === 500){
    gameState = STAGE2;
  }
}
if (gameState === STAGE2){

    bg2 = createSprite(100,200);
    bg2.x = bg2.width/2;
    bg2.addImage(bg2Img);
    bg2.scale = 1;
    bg2.velocityX = -3;

var hermione = createSprite(50,50);
hermione.addImage(hermioneImg);
}


    drawSprites();

  strokeWeight(10);
  fill("blue")
  textSize(20)
  text("Score:" + score,50,50);
  }

  function chess(){
  var chess = createSprite(Math.round(random(600, 370)),Math.round(random(50,350)), 10, 10);
  chess.addImage(chessImg1);
  chess.velocityX = -3;
  //chess.velocityY = -3;
  chess.lifetime = 150;
  chess.scale = 0.5;
  chessGroup.add(chess);
}

function chess1(){
  var chess1 = createSprite(Math.round(random(20, 370)),Math.round(random(50,350)), 10, 10);
  chess1.addImage(chessImg2);
  chess1.velocityX = 3;
 //chess1.velocityY = -3;
 chess1.lifetime = 150;
 chess1.scale = 0.5;
 chessGroup.add(chess1);
}

function chess2(){
  var chess2 = createSprite(Math.round(random(20, 370)),Math.round(random(50,750)), 10, 10);
  chess2.addImage(chessImg3);
  //chess2.velocityX = 3;
  chess2.velocityY = -3;
  chess2.lifetime = 150;
  chess2.scale = 0.5;
  chessGroup2.add(chess2);
}

function chess3(){
  var chess3 = createSprite(Math.round(random(20, 370)),Math.round(random(50,350)), 10, 10);
  chess3.addImage(chessImg4); 
  chess3.velocityX = 3;
  //chess3.velocityY = -3;
  chess3.lifetime = 150;
  chess3.scale = 0.5;
  chessGroup3.add(chess3);
}

function chess4(){
  var chess4 = createSprite(Math.round(random(20, 370)),Math.round(random(50,750)), 10, 10);
  chess4.addImage(chessImg5);
  //chess4.velocityX = 3;
  chess4.velocityY = -3;
  chess4.lifetime = 150;
  chess4.scale = 0.5;
  chessGroup4.add(chess4);
}
  
  