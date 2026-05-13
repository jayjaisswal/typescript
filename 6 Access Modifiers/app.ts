// parent class can access all members of the class
class Employee {
  // access modifiers
  public empCode: number;
  private empSalary: number;
  protected empName: string;

  constructor(code: number, name: string, salary: number) {
    this.empCode = code;
    this.empName = name;
    this.empSalary = salary;
  }

  // public method to access private member empSalary
  public getEmployeeDetails(): string {
    return `
        Employee Code: ${this.empCode},
        Employee Name: ${this.empName},
        Employee Salary: ${this.empSalary}`;
  }
}

class Manager extends Employee {
  constructor(code: number, name: string, salary: number) {
    super(code, name, salary);
  }

  public getManagerDetails(): string {
    return `Manager Code: ${this.empCode}, Manager Name: ${this.empName}`;
    // protected member empName can be accessed here because Manager is a subclass of Employee
    // Manager Salary: ${this.empSalary} cannot be accessed here because empSalary is private in Employee(Parent) class
  }
}

const emp1 = new Employee(101, "John Doe", 50000);
console.log(emp1.getEmployeeDetails());

const mgr1 = new Manager(201, "Jane Smith", 80000);
console.log(mgr1.getManagerDetails());
console.log(mgr1.getEmployeeDetails()); // Manager can access public method of Employee class to get details including private member empSalary

// the main difference between public, private and protected is that 
// public members can be accessed from anywhere, 
// private members can only be accessed within the class they are declared in
// protected members can be accessed within the class they are declared in and by subclasses. Not accessible from outside the class.
// main difference between private and protected :
// when we extends a class, private members of the parent class are not accessible, but protected members are accessible in the child class.

// readonly
class Car {
   public name;
   constructor(name:string){
    this.name = name;
   }

   changeName(){
    this.name = "jay"
   }
}

let c1 = new Car("BMW");   // BMW
c1.changeName();           // jay


// readonly
class Car1 {
   
   constructor(public readonly name:string){
    this.name = name;
   }


  //  now cannot change the name property because it is readonly
  //  changeName(){
  //   this.name = "jay"
  //  }

}

let c = new Car1("BMW");   // BMW
// c1.changeName();           // jay