//Create variables here
var dog,dogImg,dogImg2,  database, foodS, foodStock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas( 500, 500);
  database=firebase.database();
  dog=createSprite(300,300);
  dog.addImage(dogImg);
  dog.scale=0.2

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogImg2);
}

  drawSprites();
  //add styles here
  textSize(40)
  fill (0)
  text ("Food Remaining: "+foodS,100,60)
textSize(20)
  text("Note:Press UP Arrow key to feed Drago milk!",70,90)

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x,){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update(
      {
         food:x
      }
  )
  
}



