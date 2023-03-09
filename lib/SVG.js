class SVG {
  constructor() {
    //method
    this.text = "";
    this.shape = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }

  setText(text, textColor) {
    if (text.length <= 3) {
      this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {
      throw new Error("Must be 3 characters or less");
    }
  }
  //newShape class Circle
  setShape(shape) {
    this.shape = shape.render(); //metho that exist in circle, triangle or square class
  }
}

module.exports = SVG;
