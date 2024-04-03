//singleton
//constractor method -> singleton is created inside it
//Object.create


//symbol
const mySymbol = Symbol("key1");

//object literals
const jsUser = {
    name: "Sudipto",
    "full name": "Sudipto Mondal",
    [mySymbol]: "Scorpio",
    age: 23,
    address: "Dhaka",
    email: "sudipto@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Wednesday", "Tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "msudipto757@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "msudipto79897@gmail.com";
// console.log(jsUser);

jsUser.greetings = function() {
    console.log("Hello user!");
}
jsUser.greetingsTwo = function() {
    console.log(`Hello! ${this.name}`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());