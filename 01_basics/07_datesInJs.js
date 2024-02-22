//Dates

let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString);
// console.log(myDate.toLocaleTimeString);

// console.log(typeof myDate);
// let myCreatedDate = new Date(2024, 1, 22)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate1 = new Date(2024, 1, 22, 19, 12)

let myCreatedDate1 = new Date("02-22-2024")
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 2);      //+2 for BD sytem. Week starts with Saturday


newDate.toLocaleString('default', {
    weekday: "long",
})