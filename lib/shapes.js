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

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = {
    Square,
    Triangle,
    Circle
};