const { Square, Triangle, Circle } = require("./shapes");

class SVG {
    constructor () {}

    setShape(shape) {
        this.shape = shape;
    }

    setText(text, textColor) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        } else {
            this.text = text;
        }
        
        this.textColor = textColor;
    }

    render() {
        var svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
        
        if(this.shape != undefined) {
            svgString = svgString.concat(this.shape.render());
        }
        
        if (this.text != undefined) {
            svgString = svgString.concat(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`);
        }

        svgString = svgString.concat(`</svg>`);

        return svgString;
    }
}

module.exports = {SVG};