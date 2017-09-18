class Bird {
  constructor(location) {
    this.location = location;

    this.color = {r: 255, g: 0, b: 0};
    this.size = 10;
  }

  display() {
    noStroke();
    fill(this.color.r, this.color.g, this.color.b);
    rect(this.location.x, this.location.y, this.size, this.size);
  }
}
