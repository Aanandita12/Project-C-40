//Create variables here

function preload(){

  dogImg=loadImage("dogImg.png");
  dogImg1=loadImage("dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

function draw() { 
  
    background("green");
  /*  if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }*/
   /* else */if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    /*else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    } */

  drawSprites();
  //add styles here

}
/*function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}*/

function readStock(){
  foodS=data.val();

}

function writeStrock(x){
  if(x<=0){
    x=0
  } else{
    x=x-1
  }
  database.ref("/").update({
    Food:x
  })
}

fedTime=database.ref('FeedTime');
fedTime.on("value",function (data) {
  lastFed=data.vel
})

display();{
  var x=80,y=100

  imageMode(CENTER);
  image(this.image,720,220,70,70);

  if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
        x=80;
        y=y+50;
      }
    }
  }
}

feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFood);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed:"+ lastFed%12 +"PM", 350,30);
}else if(lestFed==0){
  text("Lest Feed: 12 AM",350,30);
}else{
  text("Lest Feed:"+ lastFed+"AM",350,30)
}

 feedDog();{
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  datadase.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
function addFoods() {
  foodS++;
  database.ref('/').updata({
    Food:Food
  })
  
}
//read game state form datebase
readState=datebase.ref('gameState');
readState.on("value",function(date){
   gameState=data.val();
});
if(gameState!="Hungry"){
  feed.hide();
  addFood.hide();
  dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(sadDog);
}
bedroom();{
   background(bedroom,550,500);
}
garden();{
   background(bedroom,550,500);  
}
washroom();{
   background(bedroom,550,500);
}

currentTime=hour();
if(currentTime==(lastFed+1)){
  update("Playing");
  foodObj.garden();
}else if(currentTime==(lastFed+2)){
  update("Sleeping");
  foodObj.bedroom();
}else if(currentTime>(lastFed+2)&&currentTime<=(lastFed+4)){
  updaye("Bathing");
  foodObj.washroom();
}else{
  update("Hungry");
  foodObj.display();
}
drawSprites();

end();{
  console.log("Game Ended");
}


 }
