function setup() 
{
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() 
{
  background(255);

  for (var x = 10; x < width - 10; x = x + 10) 
  {
    let color = map(x, 0, width - 10, 0, 400);
    line(x, height/2, mouseX, mouseY);
  	stroke(color, 100, 100);
  }
}
