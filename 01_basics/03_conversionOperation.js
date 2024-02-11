let score = false

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1 ; false => 0

// let isLoggedIn = 0;
let isLoggedIn = "Sudipto";
let boolLoggedIn = Boolean(isLoggedIn)
//console.log(boolLoggedIn);

// true => 1 ; false => 0
//"" => 0 ; "Something" => 1

let number = 25
let stringNum = String(number)
// console.log(stringNum);
// console.log(typeof stringNum);

//*********************** Operations **************************/

let value = 5
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);      // 2 power of 2 (2^2)
// console.log(2/2);      
// console.log(2%2);   

let str1 = "Hello"
let str2 = " Sudipto"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);       //122 if string is at first then all will be converted to string
// console.log(1 + 2 + "2");       //32 if number first then calculation will be done first then string will be added


// console.log(true);       => true
// console.log(+true);      => 1
// console.log(+"");        => 0

let gameCounter = 100
gameCounter++       //prefix
++gameCounter       //postfix
console.log(gameCounter);
