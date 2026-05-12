"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user1 is of type User and must have all the properties defined in the User interface
// its is an object that has the properties defined in the User interface
let user1 = {
    name: "John",
    age: 30,
    email: "abc@gmail.com",
    isAdmin: true,
};
function printUser(obj) {
    console.log(obj.name, obj.age, obj.email, obj.isAdmin);
}
printUser(user1);
let a = {
    name: "John",
    age: 30
};
let num = 10; // num is of type nmbr which is an alias for number type
let c; // c is of type combo which can be number , string or null
// Types
// Note: we cannot merge types like interfaces if we have 2 types with same name then it will give error
// type User1 = {
//     name: string;
// }
// type User1 = {
//     age: number;
// }   
// Union
let d; // d can be either number or string
function aa(b) {
    console.log(b.name, b.age, b.email);
}
//# sourceMappingURL=app.js.map