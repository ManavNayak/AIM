var bg, bgImg, brand, brandImg, box1;
var load, loadImg;
var home, homeImg, main, mainImg, world, pvp, skin;

var gameState = "BRAND";

function preload(){

   bgImg = loadImage("bg.jpeg");
   brandImg = loadImage("brand.png");
   loadImg = loadImage("load.jpg");
   homeImg = loadImage("home.jpeg");
   mainImg = loadImage("main.png");

}

function setup() {
createCanvas(1920, 1080);

    bg = createSprite(980 , 670, 1000, 1000);
    bg.addAnimation("bg", bgImg);
    bg.scale = 3;

    brand = createSprite(980 , 670, 100, 100);
    brand.addAnimation("brand", brandImg);
    brand.scale = 3.75;

    box1 = createSprite(980 , 670, 1000, 1000);
    box1.velocityX = 5;
    box1.visible = false;

    box2 = createSprite(980 , 670, 1000, 1000);
    box2.visible = false;

    load = createSprite(960 , 540, 1000, 1000);
    load.addAnimation("load", loadImg);
    load.scale = 1.29;

    home = createSprite(960 , 540, 1000, 1000);
    home.addAnimation("home", homeImg);
    home.scale = 3.25;

    main = createSprite(940 , 400, 1000, 1000);
    main.addAnimation("main", mainImg);
    main.scale = 2.5;

    world = createImg('world.png');
    world.position(160, 800);
    world.mousePressed(wScreen);
    world.scale = 5;

    pvp = createImg('pvp.png');
    pvp.position(760, 800);
    pvp.mousePressed(pvpScreen);
    pvp.scale = 5;

    skin = createImg('skin.png');
    skin.position(1360, 800);
    skin.mousePressed(sScreen);
    skin.scale = 5;

}

function draw() {
  background("bg");
  
  if(gameState === "BRAND"){

      load.visible = false;
      home.visible = false;
      main.visible = false;

      skin.hide();
      world.hide();
      pvp.hide();

      brand.visible = true;
      bg.visible = true;

  }

  if(box1.x > 1920 && gameState === "BRAND"){

      gameState = "LOAD";
      loadScreen();

  }

  if(box2.x > 1920 && gameState === "LOAD"){

    gameState = "HOME";
    homeScreen();

  }
  
  console.log(gameState);
  drawSprites();
}

function loadScreen(){

    if(gameState === "LOAD"){
       
       brand.visible = false;
       home.visible = false;
       main.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       box1.vellocityX = 0;
       box2.velocityX = 5;

       load.visible = true;

    }

}

function homeScreen(){

    if(gameState === "HOME"){
       
       brand.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       skin.show();
       world.show();
       pvp.show();

       main.visible = true;
       home.visible = true;

    }

}

function wScreen(){

    if(gameState === "WORLD"){
       
       brand.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;      
       main.visible = false;
       home.visible = false;

       skin.show();
       world.show();
       pvp.show();

    }

}

function pvpScreen(){

    if(gameState === "PVP"){
       
       brand.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.show();
       world.show();
       pvp.show();

    }

}

function sScreen(){

    if(gameState === "SKIN"){
       
       brand.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.show();
       world.show();
       pvp.show();

    }

}