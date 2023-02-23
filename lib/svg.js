// we need the shape constructors/classes for our "setShape" method
const { Square, Triangle, Circle } = require("./shapes");

class SVG {
    constructor () {
        // These values are static for the purpose of this challenge, and could therefore be directly written into that first line of the "render" method below.
        // However, if we did so and later decided to introduce a way to change these values in a hypothetical future version (e.g. with a "setWidthHeight" prototype), we would have to change the "render" method.
        // It may be preferable to offer the user the ability to determine these values through this constructor from the start, but then I would have go change the tests, which were provided to us by the instructors.
        // Setting these "default" values here therefore seems like the best balance between allowing for hypothetical future development and working with the syntax used in the tests I was given.
        this.version = "1.1";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";

        // As above, these are static for the purposes of this challenge, but we may want the ability to change them in the future.
        // Setting them here is not ideal, but it is consistent with the syntax in the tests, and at least I know the constructor will be called before everything else.
        // If I were to set them in "setText", any future "setTextSize" prototype (for example) would need to be called AFTER "setText" or else the values would be overwritten (barring changes to "setText").
        this.textX = "150";
        this.textY = "125";
        this.textSize = "60";
        this.textAnchor = "middle";
    }

    // simple method for setting the svg object's shape
    setShape(shape) {
        this.shape = shape;
    }

    // simple method for setting the svg object's text and text color
    setText(text, textColor) {
        // prevents user from putting more than 3 characters
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        } else {
            this.text = text;
        }

        // don't know of a way to check that the user provided an actual color value, and such a test isn't called for in the challenge requirements, but this is where we WOULD check that
        this.textColor = textColor;
    }

    // take the svg's properties, save them in a string, and return that string
    render() {
        // every svg starts with this
        var svgString = `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">`;
        
        // if the svg has been given a shape value...
        if(this.shape != undefined) {
            // call the relevant shape's render method and concatenate it onto our svgString
            svgString = svgString.concat(this.shape.render());
        }
        
        // if the svg has been given a text value...
        if (this.text != undefined) {
            // concatenate a string with all the text values in it onto svgString
            svgString = svgString.concat(`<text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="${this.textAnchor}" fill="${this.textColor}">${this.text}</text>`);
        }

        // concat as "</svg>" closing tag
        svgString = svgString.concat(`</svg>`);

        return svgString;
    }
}

// export!
module.exports = {SVG};