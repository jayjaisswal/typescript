// Primitive
// Number, String, Boolean, Null, Undefined, Symbol, BigInt 
 let c:Number = 12;
 let d:String = "Hello";
 let e:Boolean = true;  

// primitives are stored in stack memory and reference types are stored in heap memory
// primitive example
var a = 12
var b= a;
b =b+2 
// b becomes 14 but a is still 12 because they are primitive types and stored in different memory locations

// .......................................................

// Object Types or reference types
// Object, Array, Tuple, Enum, Function, Class, Interface, Type Alias
// Arrays
let arr:Number[] = [1,2,3];

let arr1:(Number | String)[] = [1,2,3,"Hello"];

let arr2:(Number | Object)[] = [1,2,3,{name:"John"}];


// reference example -> [], (), {} are reference types
var p = [1,2,3,4,5];
var q = p;
q.pop();
// here both p and q will be [1,2,3,4] because they are reference types and stored in the same memory location
// both p and q will be [1,2,3,4,5,6] because they are reference types and stored in the same memory location


// tupples -> fixed length array with different types of data
// order matters in tupples
let tupluu:[Number, String] = [1,"Hello"];


