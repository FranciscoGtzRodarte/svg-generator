// packages needed for this application
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/Shapes");
const SVG = require("./lib/SVG");
const { writeFile } = require("fs/promises");

// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "Add text to your logo:",
    name: "text",
  },
  {
    type: "input",
    message: "Color of the text:",
    name: "textColor",
  },

  {
    type: "list",
    message: "Choose a shape:",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "input",
    message: "Color of the shape:",
    name: "shapeColor",
  },
];

function init() {
  //inquirer questions for userInput and then gets the values
  inquirer.prompt(questions).then(({ text, textColor, shape, shapeColor }) => {
    //console.log(`Line 64 index.js: ${text}`);
    let newShape;
    // switch case that initializes a newShape object of the selected shape with the class of that shape
    switch (shape) {
      case "Circle":
        newShape = new Circle();
        break;
      case "Square":
        newShape = new Square();
        break;
      default:
        newShape = new Triangle();
        break;
    }
    //calls the method of setColor of the shape selected
    newShape.setColor(shapeColor);
    const svg = new SVG(); //initializes a svg object of SVG class
    svg.setText(text, textColor); //calls the setText method of SVG class with 2 arguments
    svg.setShape(newShape); //calls the setShape method of SVG class with 1 argument
    const fileName = "./Assets/examples/logo.svg"; //name and directory of the svg created
    return writeFile(fileName, svg.render()); //calls the function writeTofile with two parameters: fileName and the method render of svg Class
  });
}

init(); //calls the init function
