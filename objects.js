// singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Alok",
    "full_name":"alok Patra",
    [mySym] : "mykey1",
    age:18,
    location:"Jamshedpur",
    email : "palok38@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["monday","saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full_name);
// console.log(JsUser["full_name"]);
// console.log(typeof JsUser.mySym);
// console.log(typeof JsUser[mySym]);


JsUser.email = "alok@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "alok@chat.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.full_name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


