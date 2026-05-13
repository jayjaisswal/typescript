"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HumanMaker {
    name;
    isMale;
    noOfEye;
    age = 0; // all born with age = 0
    cash = 0;
    //   bydefault all propeties are public in typescript.
    constructor(name, isMale, noOfEye = 2) {
        this.name = name;
        this.isMale = isMale;
        this.noOfEye = noOfEye;
    }
}
let hum = new HumanMaker("Jay", true);
console.log(hum.name);
// another way to create a class 
class Truck {
    name;
    model;
    year;
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}
let truck1 = new Truck("Volvo", "FH16", 2020);
//# sourceMappingURL=app.js.map