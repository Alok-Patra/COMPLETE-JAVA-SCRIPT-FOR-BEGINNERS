// FUNCTIONS

function sayMyname(){
    console.log("A");
    console.log("L");
    console.log("O");
    console.log("K");
}
//sayMyname()

// function addTwoNumbers(num1,num2){         // HERE num1 and num2 ARE PARAMETERS
//     console.log(num1+num2);
    
// }
// addTwoNumbers(3,4)          // HERE 3,4 ARE ARGUMENTS

// function addTwoNumbers(num1,num2){
//     let result = num1 + num2
//     console.log(result);
    
//     return result
// }

// const result = addTwoNumbers(3,5)

// console.log("Result:", result);


function loginUserMessage(username="sam"){
    if(!username){
console.log("Plese enter a username")
    return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("alok"))

