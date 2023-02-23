// import fs, inquirer, shapes, and svg
const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes");
const {SVG} = require('./lib/svg');

// array of questions for inquirer to ask in console
const questions = [
    {
        type: 'input',
        message: 'What text would you like in your SVG? (Please limit yourself to three characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like your SVG to be?',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like your shape to be?',
        name: 'shapeColor',
    },    
]

// everything we want to happen when the user calls index.js
function init() {
    // prompt the questions with inquirer
    inquirer
        .prompt(questions)
        .then(function(data) {
            // make svg and fill it with user inputs...

            // create a new svg object and set text and textColor
            var svg = new SVG();
            svg.setText(data.text, data.textColor);

            // make a new shape object based on the shape the user chose
            var shape;
            if (data.shape === "Square") {
                shape = new Square();
            } else if (data.shape === "Circle") {
                shape = new Circle();
            } else if (data.shape === "Triangle") {
                shape = new Triangle();
            }
            // set fill color of the shape
            shape.setColor(data.shapeColor)

            // save our new shape to the svg object
            svg.setShape(shape);

            // render the svg and save it in a string
            var svgString = svg.render();

            // make a file logo.svg and fill it with our rendered svg string; if there was an error, log that error, but if not, log "generated logo.svg"
            fs.writeFile("logo.svg", svgString, (err) => err ? console.error(err): console.log("Generated logo.svg"));
        })
        .catch((error) => console.log(error));
}

// call init!
init();