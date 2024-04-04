//singleton object
const tinderUser = new Object()

//non singleton object
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Chomu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Sudipto",
            lastName: "Mondal"
        },
        nonUserFullName: {
            firstname: "Random",
            lastName: "User"
        }
    }
}

// console.log(regularUser?.fullname?.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)      //{}-> target object, obj1, obj2, obj4-> source object

const  obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "l@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));