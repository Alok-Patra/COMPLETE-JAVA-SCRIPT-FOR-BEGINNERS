// IF STATEMENT
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature === 50){
//         console.log("less than 50");
        
// }else{
//     console.log("temperature not equal to 50");
    
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`)
// }

// const balance = 1000 


//     // if(balance>500) console.log("test")

//     if (balance < 500){
//             console.log("less than 500")
//     }else if (balance < 750){
//         console.log("less than 750");
        
//     }else{
//         console.log("less than 1200");
        
//     }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
    
}

// NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

let val1;
// val1 = 5 ?? 10

// val2 = null ?? 10
// console.log (val2)


val1 = undefined ?? 15
val2 = null ?? 10 ?? 15
// console.log (val2)

// terniary operator

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")