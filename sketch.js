
var object1,movingRect, object2,object3;


function setup() {
  createCanvas(800,400);
 object1 = createSprite(400, 200, 50, 50);
 object2 = createSprite(500, 200, 50, 50);
 object3 = createSprite(600, 200, 50, 50);

 movingRect = createSprite(200,200,30,50);
 object1.shapeColor = "green";
 object2.shapeColor = "green";
 object3.shapeColor = "green";
 movingRect.shapeColor ="green";

 object1.velocityX = 3;
 object2.velocityX = -3;

 movingRect.debug = true;
 object1.debug = true;
}

function draw() {
  background(220);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;



  if(isTouching(movingRect, object3)){
     movingRect.shapeColor = "red";
     object3.shapeColor = "red";
  }else{
    object3.shapeColor = "green";
    movingRect.shapeColor ="green";
  }

  bounceOff(object1,object2);

  
  drawSprites();
}

function isTouching(obj1, obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<obj2.width/2+obj1.width/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2
    && obj1.y-obj2.y<obj2.height/2+obj1.height/2)
    {
      return true;
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  }else{
    return false;
    //fixedRect.shapeColor = "green";
    //movingRect.shapeColor ="green";
  }

}

function bounceOff(obj1, obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<obj2.width/2+obj1.width/2
    && obj2.y-obj1.y<obj2.height/2+obj1.height/2
    && obj1.y-obj2.y<obj2.height/2+obj1.height/2)
    {
      obj1.velocityX = -obj1.velocityX;
      obj2.velocityX = -obj2.velocityX;
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  }else{
    obj1.velocityX = obj1.velocityX;
    obj2.velocityX = obj2.velocityX;
    //fixedRect.shapeColor = "green";
    //movingRect.shapeColor ="green";
  }

}


