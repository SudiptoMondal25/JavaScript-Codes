//Premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 120.53;
const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol('321')                            //Symbol
const anotherId = Symbol('321')

console.log(id === anotherId);                      //false

const bigNumber = 87423740273407203847928n          //BigInt


//Refernce (Non-premitive) : Array, Objects, Functions 

//Array
const heros = ["Spiderman", "Superman", "Batman"]

//Object
let myObj = {
    name: "Sudipto",
    age: 24
}

//Function as variable
const myFunction = function() {
    console.log("Hello worlds");
}

//To know the datatypes

console.log(typeof myObj);

// *********************************************************************

// MEMORY
// Stack (Primitive), Heap (Non - Primitive)
// In stack the copy is modified every time. The main reference is not modified in stack
let myVarsity = "United International University"
let anothervarsity = myVarsity              
anothervarsity = "XYZ University"

console.log(myVarsity);
console.log(anothervarsity);


// Heap

let userOne = {
    name: "user1",
    email: "user1@gmail.com"
}

let userTwo = userOne;

userTwo.name = "user2"        //Modifying the reference valu of userOne

console.log(userOne.name);
console.log(userTwo.name);
