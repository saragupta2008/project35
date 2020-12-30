//Create variables here
var dog,dogImg,dogImg2,  database, foodS, foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  dogImg2=loadImage("dogImg1.png")
}

function setup() {
  createCanvas( 500, 500);
  dog=createSprite(200,100);
  dog.addImage(dogImg);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



