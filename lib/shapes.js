class Shape {
    constructor() {
        this.color = "transparent"; // make all shapes transparent by default (until setColor is called)
    };

    setColor(color) {
        this.color = color; // sets color property to user input value
    }

    render() {
        throw new Error('Child class must implement a render() method.'); // in case someone tries to render a generic shape
    }
}

// see my notes in svg.js about setting default values in the constructor as a way to both play nice with syntax established for me in the provided test files and also allow for development of prototypes in the future should we want the ability to change properties other than color

class Square extends Shape {
    constructor() {
        super();
        this.x = "90";
        this.y = "40";
        this.width = "120";
        this.height = "120";
    }

    // polymorphic render method specific to Squares
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.points = "150, 18 244, 182 56, 182"
    }

    // polymorphic render method specific to Triangles
    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.cx = "150";
        this.cy = "100";
        this.r = "80";
    }

    // polymorphic render method specific to Circles
    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
    }
}

// export!
module.exports = {
    Square,
    Triangle,
    Circle
};