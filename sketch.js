var rect1, rect2, rect3, rect4;    

function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";
  rect1.debug = true;

  rect2 = createSprite(200,200, 150,100);
  rect2.shapeColor = "green";
  rect2.debug = true;

  rect3 = createSprite(600, 150, 20,20);
  rect3.shapeColor = "white";
  rect3.debug = true;
  rect3.velocityY = 4;
  
  rect4 = createSprite(600, 350, 20,20);
  rect4.shapeColor = "white";
  rect4.debug = true;
  rect4.velocityY = -4;
  
}

function draw() {
  background("black"); 
  
  rect1.x = mouseX;
  rect1.y = mouseY;
  
  if (rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 
    && rect2.x - rect1.x <=  rect1.width/2 + rect2.width/2 
    && rect1.y - rect2.y <= rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y <= rect1.height/2 + rect2.height/2 ) {
    rect1.shapeColor="red";
    rect2.shapeColor="red";

  }
  else  {
    rect1.shapeColor="green";
    rect2.shapeColor="green";

  }

  if ( rect3.y - rect4.y <= rect3.height/2 + rect4.height/2 
    && rect4.y - rect3.y <= rect3.height/2 + rect4.height/2) {
    rect3.velocityY = (-1)*rect3.velocityY; 
    rect4.velocityY = (-1)*rect4.velocityY; 

  } 

  drawSprites();

  
} 