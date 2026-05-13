class HumanMaker {
  age = 0; // all born with age = 0
  cash: Number = 0;
  //   bydefault all propeties are public in typescript.
  constructor(
    public name: string,
    public isMale: boolean,
    public noOfEye: Number = 2,
  ) {}
}

let hum = new HumanMaker("Jay", true);
console.log(hum.name);

// another way to create a class 
class Truck{
     public name: string;
     public model: string;
     public year: number;

     constructor(name: string, model: string, year: number){
          this.name = name;
          this.model = model;
          this.year = year;
     }
}

let truck1 = new Truck("Volvo", "FH16", 2020);