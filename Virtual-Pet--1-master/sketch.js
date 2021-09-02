var dog, happydog, database, foodS, foodStock; 
var database; 
function preload()
{
  dogIMG = loadImage("images/dogimg.png"); 
  happydogIMG = loadImage("images/dogimg1.png"); 

}

function setup() {
  createCanvas(500, 500);
  database= firebase.database()
  dog = createSprite(250,250,10,10); 
  dog.addImage(dogIMG)
  dog.scale = 0.15;   
  foodStock=database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  
  background(46,139,87); 
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS); 
    dog.addImage(happydogIMG); 
  }
  textSize(13); 
  fill("white"); 
  stroke("black")
  text("Note: Press UP_ARROW Key To Feed Milo Milk", 130,10); 

}
//Function to read values from DB
function readStock(data){
  foodS=data.val(); 
}

//Function to write values in DB
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



