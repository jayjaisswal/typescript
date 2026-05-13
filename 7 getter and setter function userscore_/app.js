"use strict";
// getter and setter function
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    // getter function to get the name of the employee
    get name() {
        return this._name;
    }
    // setter function to set the name of the employee
    set name(name) {
        this._name = name;
    }
}
let emp1 = new Employee("John Doe");
console.log(emp1.name); // John Doe
emp1.name = "Jane Smith";
console.log(emp1.name); // Jane Smith
//  getter and setter functions are used to access and modify the private members of a class.
//  getter function is used to get the value of a private member and setter function is used to set the value of a private member.
// static keyword
console.log(Math.PI); // 3.141592653589793  
// here Math is class name
// but we are accessiong PI without creating an instance of Math class because PI is a static member of Math class. 
// Static members can be accessed without creating an instance of the class. Static members are shared among all instances of the class. 
// Static members can be accessed using the class name.
class Circle {
    static PI = 3.141592653589793;
    static getArea(radius) {
        return Circle.PI * radius * radius;
    }
}
console.log(Circle.PI); // 3.141592653589793
console.log(Circle.getArea(5)); // 78.53981633974483
// ..........................................................................
// Abstract class and methods
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50
// Abstract classes cannot be instantiated directly. They are meant to be subclassed. 
// Abstract methods must be implemented by the subclasses.
// one more example of abstraction
class Cooking {
    gas;
    temp;
    constructor(gas, temp) {
        this.gas = gas;
        this.temp = temp;
    }
}
class vegetable extends Cooking {
}
//# sourceMappingURL=app.js.map