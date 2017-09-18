let bird;

function setup() {
  createCanvas(600, 600);

  bird = new Bird(createVector(10, 10));
}

function draw() {
  background(0);

  bird.display();
}
