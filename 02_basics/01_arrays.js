const arr = [3, 6, 7, 32, 54, 72, 23, 15, 34]
const agents = ["Omen", "Jett", "Raze", "Chamber"]
// console.log(arr.toString());
// console.log(agents[2]);

// const arr1 = new Array(3,5,8,2,4)
// console.log(arr1[3]);

// Array Methods
agents.push("Sage")
agents.push("Skye")
agents.push("Neon")
agents.pop()
agents.unshift("Killjoy")       //Place the element at first of the array
agents.shift()                  //Remove the element from the first of array
// console.log(agents);
// console.log(agents.includes("Jett"));
// console.log(agents.indexOf(5));

// const arr2 = agents.join()       //Converts array into string

// console.log(agents);
// console.log(arr2);

//slice, splice

console.log("A", arr);

const newArr1 = arr.slice(1, 4)

console.log(newArr1);
console.log("B ", arr);

const newArr2 = arr.splice(1, 4)
console.log("C ", arr);
console.log(newArr2);