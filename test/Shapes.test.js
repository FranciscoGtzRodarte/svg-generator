//const Shape = require("../lib/Shapes");
const { Triangle, Circle, Square } = require("../lib/Shapes");

describe("Triangle", () => {
  //test that checks if the triangle shape is include correctly
  describe("Did not include shape Triangle", () => {
    test("Should include Triangle shape", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150,0 0,200 300,200" fill="blue"/>'
      );
    });
  });
});
describe("Circle", () => {
  //test that checks if the circle shape is include correctly
  describe("Did not include Circle shape", () => {
    test("Should include Circle shape", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="blue"/>'
      );
    });
  });
});
describe("Square", () => {
  //test that checks if the square shape is include correctly
  describe("Did not include Square shape", () => {
    test("Should include Square shape", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<rect x="50" width="200" height="200" fill="blue"/>'
      );
    });
  });
});
