//Premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 120.53;
const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol('321')
const anotherId = Symbol('321')

console.log(id === anotherId);

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