let bird;
let gravity;

function setup() {
  createCanvas(600, 600);

  bird = new Bird(createVector(10, 10));

  gravity = createVector(0, 0.5);
}

function draw() {
  background(0);

  bird.applyForce(gravity);
  bird.update();
  bird.display();
}
