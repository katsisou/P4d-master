/*
    Paste the code for your week 6 exercise below.
*/

/*trial*/ 
var circleX = 100;
var circleY = 200;

function setup() { 
  createCanvas(800 , 400);
} 

function draw() { 
  background(255, 255,240);
  
  push();
  noFill();
  ellipse(200, 200, 50);
  ellipse(300, 200, 50);
  ellipse(400, 200, 50);
  ellipse(500, 200, 50);
  ellipse(600, 200, 50);
  ellipse(700, 200, 50);
 pop();
  
  push();
  fill(255, 0, 0, 200);
  noStroke();
  ellipse(circleX, circleY, 50, 50);
  pop();
  if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) {
    circleX +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     circleX -= 5;
   } else if (keyCode == UP_ARROW) {
     circleY -= 5; 
   } else if (keyCode == DOWN_ARROW) {
     circleY +=5; 
   }
    
  }  
}

/*final*/
var c1Color
var c2Color 
var c3Color 
var c4Color
var c5Color
var c6Color 
var c7Color

function setup() { 
  createCanvas(800 , 400);
   stroke('black');
  strokeWeight(2);
  c1Color = color(0);
  c2Color = color(0);
  c3Color = color(0);
  c4Color = color(0);
  c5Color = color(0);
  c6Color = color(0);
  c7Color = color(0);
  
} 

function draw() { 
  background(255, 255,240);
   
  //text//
  fill(255, 0, 0,200);
  textSize(20);
  text("R", 90, 150);
  
  fill(0, 0, 255, 200);
  textSize(20);
  text("B", 190, 150);
  
  fill(255, 192, 0, 200);
  textSize(20);
  text("Y", 290, 150);
  
  fill(0, 128, 0);
  textSize(20);
  text("G", 390, 150);
  
  fill(128, 0, 128);
  textSize(20);
  text("P", 490, 150);
  
  fill(255, 105, 180);
  textSize(20);
  text("H", 590, 150);
  
  fill(255, 165, 0);
  textSize(20);
  text("O", 690, 150);
  
  fill(0);
  textSize(20);
  text("A RESET", 355, 300);
  
  // first cicle red//
  push();
  fill(c1Color);
  noStroke();
  ellipse(100, 200, 50);
  if(keyIsPressed && key == 'r'){
    c1Color = color(255, 0, 0, 200)
     }
  else if(keyIsPressed && key == 'a'){
    c1Color = color(0);
          }
  pop();
  
  //second circle blue//
  push();
  fill(c2Color);
  noStroke();
  ellipse(200, 200, 50);
  if(keyIsPressed && key == 'b'){
    c2Color = color(0, 0, 255, 200);
  }
  else if(keyIsPressed && key == 'a'){
    c2Color = color(0);
  }
  pop();
  
  //third circle yellow//
  push();
  fill(c3Color);
  noStroke();
  ellipse(300, 200, 50);
  if(keyIsPressed && key == 'y'){
    c3Color = color(255, 192, 0, 200);
  }
  else if(keyIsPressed && key == 'a'){
    c3Color = color(0);
  }
  pop();
  
  //fourth circle green //
  push();
  fill(c4Color);
  noStroke();
  ellipse(400, 200, 50);
  if(keyIsPressed && key == 'g'){
    c4Color = color(0, 128, 0);
  }
  else if(keyIsPressed && key == 'a'){
  c4Color = color(0);
  }
  pop();
  
  //fifth circle//
  push();
  fill(c5Color);
  noStroke();
  ellipse(500, 200, 50);
  if(keyIsPressed && key == 'p'){
    c5Color = color(128, 0, 128);
  }
  else if(keyIsPressed && key == 'a'){
    c5Color = color(0);
  }
  pop();
  
  //sixth circle//
  push();
  fill(c6Color);
  noStroke();
  ellipse(600, 200, 50);
  if(keyIsPressed && key == 'h'){
    c6Color = color(255, 105, 180);
  }
  else if(keyIsPressed && key == 'a'){
    c6Color = color(0);
  }
  pop();
  
  //seventh circle//
  push();
  fill(c7Color);
  noStroke();
  ellipse(700, 200, 50);
  if(keyIsPressed && key == 'o'){
    c7Color = color(255, 165, 0);
  }
  else if(keyIsPressed && key == 'a'){
    c7Color = color(0);
  }
  pop();
   
}

/*When developing this code I had come across a youtube video explaining how to change a shape colour by pressing a key, so with that knowledge and using the p5 j.s reference. I made the interactive artwork from these references. 
links: https://www.youtube.com/watch?v=U7LsNnJH7C4 - video 
       https://p5js.org/reference/#/p5/pop - push and pop
       https://p5js.org/reference/#/p5/keyIsPressed
       https://p5js.org/reference/#/p5/noStroke
       https://p5js.org/reference/#/p5/ellipse
       https://p5js.org/reference/#/p5/text
       */