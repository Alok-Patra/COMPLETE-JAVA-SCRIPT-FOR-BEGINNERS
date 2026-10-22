// USING SINGLETON OR CONSTRUCTOR

const tinderUser = new Object()   // Both gives same result but it is SINGLETON OBJECT 

// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "alok@gmail.com",
    fullName : {
        userFullName :{
        firstName : "Alok",
        lastName : "Patra"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName.lastName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {2: "a", 4:"b"}
const obj3 = {5: "a", 9:"b"}

// const obj4 = Object.assign({}, obj1,obj2,obj3) // {}-TARGET  obj1,obj2,obj3 - SOURCE
// const obj4 = Object.assign( obj1,obj2,obj3) // when we dont use {} the result is same as when we use it the difference is syntax when we use {} it states all the value of the objects will store in parentesis but when we don't the objects value stores in object  1 
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);


const users = [
    {
        id : 1,
        email:"alok@gmail.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log((tinderUser.hasOwnProperty('isLogged')));





