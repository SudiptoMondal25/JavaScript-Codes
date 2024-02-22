const score = 200
// console.log(score);

const balance = new Number(555)
// console.log(balance);

const numberString = toString(balance);
//or
// console.log(balance.toString());
// console.log(typeof numberString);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 132.7649
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// *********************MATHS**********************

// console.log(Math);
// console.log(Math.abs(-67));
// console.log(Math.round(8.5));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.9));
// console.log(Math.min(6, 2, 9, 45, 1));
// console.log(Math.max(6, 22, 54, 45, 1));

console.log(Math.random());              //provide value between (0-1)
console.log((Math.random() * 10) + 1);   //provide fractional value between (1-10) and minimum value is always 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
//formula for random value between pre-defined min and max value
console.log(Math.floor(Math.random() * (max - min +1)) + min);