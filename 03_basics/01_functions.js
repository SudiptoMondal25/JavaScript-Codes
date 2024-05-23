function sayMyName() {
    console.log("Sudipto Mondal");
}

sayMyName           //function refference 
// sayMyName()         //function execution

function addTwoNumbers(number1, number2) {
    // console.log(number1+number2);
    console.log("Thala for a reason");
    let result = number1 + number2
    return result
}

// const result = addTwoNumbers(4, 3)
// console.log("Result: ", result);

function loginUserMessage(username = "Joe") {
    // if(username){
    //     return `${username} just logged in`
    // }
    // else {
    //     console.log("Please enter a username");
    // }
    //OR
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sudipto"));

function calculateCartPrice(val1, val2, val3, ...num1){      //rest operator (...)
    return num1;
}

// console.log(calculateCartPrice(200, 400, 300, 2313, 4546));

const user = {              //object user
    username: "Sudipto",
    price: 2000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//calling function
// handleObject(user)
handleObject({
    username: "Sreejonty",
    price: 100
})

const myNewArray = [200, 400, 500, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));