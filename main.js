const SPACE = 32;

let bird;
let gravity;
let pipe1;
let pipe2;

function setup() {
  createCanvas(600, 600);

  bird = new Bird(createVector(10, 10));
  pipe1 = new Pipe(createVector(width/2, 0));
  pipe2 = new Pipe();

  gravity = createVector(0, 0.5);
}

function draw() {
  background(0);

  pipe1.update();
  pipe2.update();
  pipe1.display();
  pipe2.display();

  bird.applyForce(gravity);
  bird.update();
  bird.display();
}

function keyPressed() {
  if(keyCode === SPACE) bird.flap();
}
