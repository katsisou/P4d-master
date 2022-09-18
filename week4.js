/*
    Paste the code for your week 4 exercise below.
*/

/*first logo*/ 
function setup () {
    createCanvas(400, 400)
  }
  function draw (){
    if (frameCount < 200) {
      logo1();
    } else if (frameCount >= 200 && frameCount < 400) {
      logo2();
    } else {
      logo3()
    } 
  
  
  }
  function logo1(){
    background(220);
    
    //bottom circle
    circle(200, 300, 250);
    noFill();
    stroke('red');
    
    //top circle
    circle(200, 100, 250);
    noFill();
    stroke('blue');
    
   //square
    square(100, 100, 200);
    noFill();
    stroke('yellow');
  }
  
   /*second logo*/
  
  function logo2 (){
    background(220)
    
    //bottom circle
    circle(200, 300, 250)
    fill('red')
    strokeWeight(50)
    stroke('yellow')
    
    //top circle
    circle(200, 100, 250)
    fill('blue')
    strokeWeight(50)
    stroke('red')
    
   //square
    square(100, 100, 200);
    fill('yellow')
    strokeWeight(50)
    stroke('blue')
  }
  
  /*third logo*/ 
  
  function logo3 (){
    background('white')
    
    //top circle
    circle(300, 300, 250);
    fill('blue');
    strokeWeight(50);
    stroke('red');
    
   //square
    square(100, 100, 200);
    fill('yellow');
    strokeWeight(50);
    stroke('blue');
    
  //bottom circle
    circle(100, 100, 250);
    fill('red');
    strokeWeight(50);
    stroke('yellow');
  }
  
  /*In making this code, I used the reference from p5.js. I used the 2D Primitives shapes in making one square and two circles. Also, using the stroke weight to create an outline of the diagrams and to fill the shapes with colour.
  links: https://p5js.org/reference/#/p5/square
         https://p5js.org/reference/#/p5/circle
         https://p5js.org/reference/#/p5/fill
         https://p5js.org/reference/#/p5/strokeWeight 
         */
  
