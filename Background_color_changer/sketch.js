var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  background(30)

  if (keyIsDown(DOWN_ARROW))
   {
     background('red')
  }
  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background('yellow')
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background('green')
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background('blue')   
  }

  
  

  drawSprites();
}




