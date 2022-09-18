/*
    Paste the code for your week 5 exercise below.
*/

function setup() {
    createCanvas(500, 400);
    background(220);
    x = width / 2;
    y = height;
  frameRate(50);
  }
  
  function draw() {
    stroke(0);
    noStroke();
    fill(0,0, random(255));
  
    fill('yellow');
    ellipse(x, y, random(20), random(40));
    
    fill('blue');
    rect(x+50, y+50, random(20), random(50));
    
    fill('red');
    ellipse(x, y, random(40), random(20));
    
    y = y - 1;
    if (y <= -30) {
      y = height;
    }
    x = x + random(-50,50);
    
    if(x<= 0 || x >= width)
    {
    x = width/2;
    }
  }

  /*Making this animation I used the P5.js references to create this loop artwork.
  links: https://p5js.org/reference/#/p5/noStroke
         https://p5js.org/reference/#/p5/ellipse
         https://p5js.org/reference/#/p5/rect
         https://p5js.org/reference/#/p5/frameRate
       */ 