const heroes= ["alok" , "patra", "loki"];


let myObj={
    name:"hitesh",
    age:22,
}

const myFunction= function(){
  console.log("hello world");
}

console.log(typeof  myObj);

// MEMORY
// Stack(PRIMITIVE TYPES) and Heap(NON-PRIMITIVE TYPES) MEMORY

let myYouTubename="alok patra";
let anotherName= myYouTubename;
anotherName="chaiaurcode"
console.log(anotherName);
console.log(myYouTubename);

let userOne = {
    email:"user@google.com",
    upi:"user@upi",
}
let userTwo= userOne;
userTwo.email="alok@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

