function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(255);

  for (var x = 10; x < width - 10; x = x + 15) 
  {
    line(x, height/2, mouseX, mouseY);
    
    if (x >= 200)
    {
      x = x + 10;
    }
  }
}
