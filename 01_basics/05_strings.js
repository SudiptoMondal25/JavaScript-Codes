const name = "Sudipto Mondal"
const age = 23
const hobby = "photography"

//console.log(`Hello, my name is ${name.toUpperCase()}. I am ${age} years old. My hobby is ${hobby}.`);

const videoGame = new String('Valorant')
console.log(videoGame);             //String object 
/*
Key: Value pairs
0: "V"
1: "a"
2: "l"
3: "o"
4: "r"
5: "a"
6: "n"
7: "t"
length: 8
*/
// console.log(videoGame[0]);
// console.log(videoGame.__proto__);
// console.log(videoGame.length);
// console.log(videoGame.toUpperCase());
// console.log(videoGame.charAt(2));
// console.log(videoGame.indexOf('t'));

const newString = videoGame.substring(0,4);
console.log(newString);

const anotherNewString = videoGame.slice(-6, 4)
console.log(anotherNewString);

const testString = "        Hello      ";
console.log(testString);
console.log(testString.trim());

const url = "https://sudipto%20mondal.com/sudipto%20web%20dev"

console.log(url.replace('%20', '-'));   //works only for replacing one time

console.log(url.includes('sudipto'));   //Upper and lowercase must match to check

const gameName = "hollywood-whore-ggwp"
console.log(gameName.split('-'));