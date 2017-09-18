const SPACE = 32;

let bird;
let gravity;
let pipe1;
let pipe2;
let playing;

function setup() {
  createCanvas(600, 600);

  bird = new Bird(createVector(10, 10));
  pipe1 = new Pipe(createVector(width/2, 0));
  pipe2 = new Pipe();

  gravity = createVector(0, 0.5);

  playing = true;
}

function draw() {
  background(0);

  pipe1.update();
  pipe2.update();

  if(pipe1.isOffScreen()) {
    pipe1 = new Pipe();
  }

  if(pipe2.isOffScreen()) {
    pipe2 = new Pipe();
  }

  pipe1.display();
  pipe2.display();

  if(playing) {
    bird.applyForce(gravity);
    bird.update();

    if(bird.collidesWith(pipe1) || bird.collidesWith(pipe2)) {
      playing = false;
    }
    bird.display();
  }
}

function keyPressed() {
  if(keyCode === SPACE) bird.flap();
}
