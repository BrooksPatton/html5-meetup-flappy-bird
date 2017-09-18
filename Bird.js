class Bird {
  constructor(location) {
    this.location = location;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);

    this.color = {r: 255, g: 0, b: 0};
    this.size = 10;
  }

  display() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.location.x, this.location.y, this.size, this.size);
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
