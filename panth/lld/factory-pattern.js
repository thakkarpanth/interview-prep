/*
    object creation based on condition 
*/

class Shape {
    draw() {};
}

class Rectangle extends Shape {
    draw() { console.log('Rectangle') };
}

class Square extends Shape {
    draw() { console.log('Square') };
}

class ShapeFactory {
    getShape(input) {
        switch (input) {
            case 'Square': 
                return new Square(); 
            case 'Rectangle': 
                return new Rectangle();
            default: 
                return null;
        }
    }
}
const shapeFactory = new ShapeFactory();
const shape1 = shapeFactory.getShape('Square');
const shape2 = shapeFactory.getShape('Rectangle');
shape1.draw();
shape2.draw();