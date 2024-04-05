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

function loginUserMessage(username) {
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

console.log(loginUserMessage("Sudipto"));