function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(14);
  noFill();
  stroke(0);
}

function draw() {
  background(255);

  if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY > height/2) {
      fill(0, 0, 255);
    } else {
      noFill();
    }
  }

  strokeWeight(random(2, 20));
  circle(width/2, height/2, height/4);
}