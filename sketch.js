function setup() {
  height = 600;
  width = 900;
  createCanvas(width, height);
}

function draw() {
  background(255);
  noStroke();
  // Three rect's are made
  // Hexa-decimal color code picked from html-color-codes website by uploading the image of flag
  rectMode(CORNER);
  fill('#FF9933'); //Saffron
  rect(0, 0, width, height / 3);
  fill('#FFFFFF'); //White
  rect(0, height / 3, width, height / 3);
  fill('#128807'); //Green
  rect(0, 2 * height / 3, width, height / 3);
  // The chakra at center is made using  2 rect's and filling with dark blue in between
  rectMode(CENTER);
  flagBlue = '#000285'
  fill(flagBlue);
  rect(width / 2, height / 2, height / 3 - 14 * width / 300, height / 3 - 14 * width / 300, height / 3 - 14 * width / 300);
  fill(255);
  rect(width / 2, height / 2, height / 3 - 20 * width / 300, height / 3 - 20 * width / 300, height / 3 - 20 * width / 300);
  //Inner circle
  translate(width / 2, height / 2);
  //rectMode(CENTER);
  fill(flagBlue);
  rect(0,0,height/21,height/21, height/21);
  // The 24 strokes are made
  theta = 0;
  no_of_strokes = 24;
  while (theta < 2 * PI) {
    noStroke();
    rotate(2 * PI / no_of_strokes);
    translate(height / 42 - 1 * width / 300, 0);
    //quad(0,0,height/30,-0.75*width/300,(height/6-10*width/300)-height/42+1.25*width/300,0,height/30,0.75*width/300);
    // To get the authentic shape of the stroke
    beginShape();
    vertex(0, 0);
    vertex(0, -width/1800);
    vertex(height / 33, -0.85 * width / 300);
    vertex((height / 6 - 10 * width / 300) - height / 42 + 0.9 * width / 300, 0);
    vertex(height / 33, +0.85 * width / 300);
    vertex(0, width/1800);
    endShape(CLOSE);
    translate(-height / 42 + 1 * width / 300, 0);
    theta += 2 * PI / no_of_strokes;
  }

  // The little bumps in between is approximated to a circle
  theta = PI / no_of_strokes;
  rotate(-theta);
  while (theta < 2 * PI) {
    stroke(flagBlue);
    strokeWeight(0.01);
    rectMode(CENTER);
    fill(flagBlue);
    rotate(2 * PI / no_of_strokes);
    rect((height / 6 - 10 * width / 300), 0, 2.5 * width / 300, 2.5 * width / 300, 2.5*width / 300);
    theta += 2 * PI / no_of_strokes;
  }
  rotate(-theta);
  translate(-width / 2, -height / 2);
  translate(100,100);
}