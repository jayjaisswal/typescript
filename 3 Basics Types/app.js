"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive
// Number, String, Boolean, Null, Undefined, Symbol, BigInt 
let c = 12;
let d = "Hello";
let e = true;
// primitives are stored in stack memory and reference types are stored in heap memory
// primitive example
var a = 12;
var b = a;
b = b + 2;
// b becomes 14 but a is still 12 because they are primitive types and stored in different memory locations
// .......................................................
// Object Types or reference types
// Object, Array, Tuple, Enum, Function, Class, Interface, Type Alias
// Arrays
let arr = [1, 2, 3];
let arr1 = [1, 2, 3, "Hello"];
let arr2 = [1, 2, 3, { name: "John" }];
// reference example -> [], (), {} are reference types
var p = [1, 2, 3, 4, 5];
var q = p;
q.pop();
// here both p and q will be [1,2,3,4] because they are reference types and stored in the same memory location
// both p and q will be [1,2,3,4,5,6] because they are reference types and stored in the same memory location
// tupples -> fixed length array with different types of data
// order matters in tupples
let tupluu = [1, "Hello"];
// enum -> enum is a way to define a set of named constants
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN; // "admin"
UserRoles.USER; // "user"
UserRoles.GUEST; // "guest"
// any type
let j; // j is of type any and can hold any type of data
// unknown type
let k; // k is of type unknown and can hold any type of data but we need to check the type before using it
k = 12;
k = "Hello";
k = true;
// we need to check the type of k before using it
if (typeof k === "number") {
    console.log(k);
}
if (typeof k === "string") {
    console.log(k.toUpperCase());
}
if (typeof k === "boolean") {
    console.log(k);
}
// void
function greet() {
    console.log("Hello World");
}
//# sourceMappingURL=app.js.map