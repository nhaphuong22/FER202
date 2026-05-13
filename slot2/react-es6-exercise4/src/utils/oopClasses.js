export const runOOPClasses = () => {
  console.log("============= 3. CLASSES & OOP =============");

  class Shape {
    constructor(color) { 
      this.color = color; 
    }
    getArea() { 
      return 0; 
    }
    toString() { 
      return `Color: ${this.color}`; 
    }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
    getArea() { 
      return this.length * this.width; 
    }
    toString() { 
      return `Rectangle [Color: ${this.color}, Area: ${this.getArea()}]`; 
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
    getArea() { 
      return 0.5 * this.base * this.height; 
    }
    toString() { 
      return `Triangle [Color: ${this.color}, Area: ${this.getArea()}]`; 
    }
  }

  const myRect = new Rectangle("Red", 10, 5);
  const myTriangle = new Triangle("Blue", 10, 5);

  console.log(myRect.toString());
  console.log(myTriangle.toString());
};