function setup() {
  createCanvas(500,500);
  background(180, 180, 255);
}

function draw() {
  translate(250,450);
  drawbranches(130);
  noLoop();
}


function drawbranches(length, right) {
  if (length < 4) {
    return;
  }
  
  // right, middle or center branch?
  if (right != undefined) {
    var angle = 0.6 + random(-0.2,0.2);
    if (right == 1) {
      rotate(angle);
    } else {
      rotate(-angle);
    }
  } else {
    rotate(random(-0.1,0.1));
  }
  
  // draw the branch
  stroke(length, 255/pow(length, 1/4), 0);
  strokeWeight(max(sqrt(length/4),1));
  line(0, 0, 0, -length);
  translate(0,-length);
  
  // maybe draw a fruit
  if (5 > random(0, length*10)) {
    var fruitColor = random(200,250)
    stroke(fruitColor,0,0);
    fill(fruitColor,0,0);
    ellipse(0,0, 3, 3);
  }
  
  push();
  drawbranches(length / random(1.3,1.6));
  pop();
  push();
  drawbranches(length / random(1.3,1.6), 0);
  pop();
  drawbranches(length / random(1.3,1.6), 1);
}
