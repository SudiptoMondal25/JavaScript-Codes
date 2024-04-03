const marvelHeros = ["Spiderman", "Captain America", "Thor", "Hulk"]
const dcHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[4][2]);

// const allHeros = marvelHeros.concat(dcHeros)    //merging all the eliments all together in a new array
// console.log(allHeros);

// const all_new_heros = [...marvelHeros, ...dcHeros]       //does the same thing as concat but spread is more preferable as it can be used in multiple number of arrays
// console.log(all_new_heros);

// const newArr = [1, 2, 4, 5, [43, 53, 86, 2], 73, [3, 6, [29, 34, 92]]]
// const usable_newArr = newArr.flat(Infinity)
// console.log(usable_newArr);

console.log(Array.isArray("Sudipto"));
console.log(Array.from("Sudipto"));
console.log(Array.from({name: "Sudipto"}));         //interesting case. Give empty arrays if we don't mention the key type


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));