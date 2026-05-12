// interface
interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
    gender?: string;// optional property
}

// user1 is of type User and must have all the properties defined in the User interface
// its is an object that has the properties defined in the User interface
let user1: User = {
    name: "John",
    age: 30,
    email: "abc@gmail.com",
    isAdmin: true,
    
} 

function printUser(obj: User) {
    console.log(obj.name, obj.age, obj.email, obj.isAdmin);
}

printUser(user1);


// extends

interface boys{
    name: string;
    age: number;

}

interface girls extends boys{ // girs interface have all the properties of boys + isMarried property
    isMarried: boolean;
}

// if we have 2 interface with same name then it merge their properties 
interface A{
    name: string;
}

interface A{
    age: number;
}

let a: A = { // both properties is compulsory otherwise it will give error
    name: "John",
    age: 30
}

// ...................................................................................

// type alias   
type nmbr = number; // nmbr is an alias for number type

let num: nmbr = 10; // num is of type nmbr which is an alias for number type

type combo = number | string | null; // combo is an alias for union type of number , string and null

let c: combo ; // c is of type combo which can be number , string or null


// Types

// Note: we cannot merge types like interfaces if we have 2 types with same name then it will give error


// type User1 = {
//     name: string;
// }
// type User1 = {
//     age: number;
// }   


// Union
let d: number | string; // d can be either number or string


// intersection
// let k: number &  string; // not like this WRONG

// Its seems it works like interface 
type Users1 = {
    name: string;
    age: number;
}

type Users2 = Users1 & { // User3 is an intersection type of User1 and an object with email property
    email: string;
}

function aa(b: Users2) {
    console.log(b.name, b.age, b.email);
}