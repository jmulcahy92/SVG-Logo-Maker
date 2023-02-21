const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes");
const svg = require('./lib/svg');

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