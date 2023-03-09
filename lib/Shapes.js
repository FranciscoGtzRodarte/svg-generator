//Triangle:  <polygon points="250,60 100,400 400,400" fill="green" />
//Circle:     <circle cx="150" cy="100" r="80" fill="green" />
//Square:  <rect width="400" height="100"  fill="green" />
class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 0,200 300,200" fill="${this.color}"/>`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}"/>`;
  }
}

module.exports = { Triangle, Circle, Square };
