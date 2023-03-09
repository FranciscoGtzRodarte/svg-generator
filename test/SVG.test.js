const SVG = require("../lib/SVG");

describe("SVG", () => {
  //test that checks if the size of the SVG is 300x200
  describe("Wrong size of SVG", () => {
    test("Should render 300x200", () => {
      const output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
      const svg = new SVG();
      expect(svg.render()).toEqual(output);
    });
  });
  //test that checks if the text was append
  describe("Text did not append correctly", () => {
    test("Should append text", () => {
      const output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">FJG</text></svg>`;
      const svg = new SVG();
      svg.setText("FJG", "white");
      expect(svg.render()).toEqual(output);
    });
  });

  //test that checks if the text length is greather than 3 characters
  describe("It needs to be 3 characters or less", () => {
    test("Should be 3 characters or less", () => {
      const output = new Error("Must be 3 characters or less");
      const svg = new SVG();
      expect(() => svg.setText("FJGR", "red")).toThrow(output);
    });
  });
  //test that checks if the text and tex color didnt set correctly
  describe("Did not set text and color correctly", () => {
    test("Should set text message and color", () => {
      const output = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">FJG</text>`;
      const svg = new SVG();
      svg.setText("FJG", "white");
      expect(svg.text).toEqual(output);
    });
  });
});
