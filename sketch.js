var ship,shipAnimation;
var sea,seaImage;
console.info("esta parte del codigo esta mal"); 

function preload(){
  shipAnimation = loadAnimation("ship-1.pnj,ship-2.png,ship-3.png,ship-4.png");
  seaImage = loadImage("sea.png");
  console.info("esta parte del codigo esta mal"); 

}

function setup(){
  createCanvas(400,400);
 ship = createSprite("70,160,20,20");
 ship.addAnimation("running",shipAnimation);
 ship.scale=(1);
 sea= createSprite("200,200,200,200");
 sea.addImage("sea",seaImage);
 sea.velocityX=-5;
 sea.x = sea.width /2; 
 console.info("esta parte del codigo esta mal"); 
}

function draw() {
  background("blue");
 if (sea.x < 0) {
   sea.x = sea.width / 2; 
 }
 console.info("esta parte del codigo esta mal"); 
 drawSprites();
}