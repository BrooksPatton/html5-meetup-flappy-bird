class Pipe {
  constructor(location=createVector(width,0)) {
    this.location = location;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);

    this.color = {r: 0, g: 255, b: 0};
    this.width = 20;
    this.height = height;
  }

  display() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
}
