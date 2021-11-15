var leftBounadry;
var rightBounadry;
var bordas;
var path;
var bomb;
var coin;
var energyDrink;
var power;
var runner;
var bomb_image;
var coin_image;
var energyDrink_image;
var path_image;
var power_image;
var runner_image;

 //imagens pré-carregadas
function preload(){
bomb_image=loadImage ("bomb.png");

coin_image=loadImage ("coin.png");

energyDrink_image=loadImage ("energyDrink.png");

path_image=loadImage ("path.png");

power_image=loadImage ("power.png");

runner_image=loadAnimation ("Runner-1.png", "Runner-2.png");

}

//crie sprite aqui
function setup(){

  //criando fundo em movimento
  path=createSprite (200,200);
  path.velocityY=5;
  path.addImage (path_image);
  path.scale=1.2;

  //criando corredor
  runner=createSprite (180,340,30,30);
  runner.addAnimation ("running",runner_image);
  runner.scale=0.08;
  
  //criando bordas
  bordas=createEdgeSprites ();

  //criando borda esquerda
  leftBounadry=createSprite (0,0,100,800);
  leftBounadry.visible=false;

  //criando borda direita
  rightBounadry=createSprite (410,0,100,800);
  rightBounadry.visible=false;
}

function draw() {
  createCanvas(400,400);
  background("black");
  path.velocityY=5;

runner.x=World.mouseX;

//condição para reiniciar fundo
if (path.y > 400 ){
path.y=height/2;
}

//colidindo com as bordas
runner.collide (leftBounadry);
runner.collide (rightBounadry);
runner.collide (bordas [3]);


  drawSprites ();
}
