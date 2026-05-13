// getter and setter function

class Employee {
    constructor(private _name: string) {

    }

    // getter function to get the name of the employee
    get name(): string {
        return this._name;
    }

    // setter function to set the name of the employee
    set name(name: string) {
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
    static PI: number = 3.141592653589793;

    static getArea(radius:number): number {
        return Circle.PI * radius * radius;
    }
}

console.log(Circle.PI); // 3.141592653589793
console.log(Circle.getArea(5)); // 78.53981633974483


// ..........................................................................

// Abstract class and methods
abstract class Shape {
    abstract getArea(): number; // abstract method
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    getArea(): number {
        return this.width * this.height;
    }
}



let rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50


// Abstract classes cannot be instantiated directly. They are meant to be subclassed. 
// Abstract methods must be implemented by the subclasses.

// one more example of abstraction
class Cooking{
    constructor(protected gas:number, protected temp: string){

    }
}
class vegetable extends Cooking{
    // every vegetable must have gas and temp to cook
    // so the upper class is abstract
}

