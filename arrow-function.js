const user = {
    userName : "Alok",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website `);
        console.log(this);
        
        
    }
    
    
}
// user.welcomeMessage()
// user.userName = "Ananya"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Alok"
//     console.log(this.username);
    
// }
// one()

const chai = (num1 , num2) => {
        return num1 + num2
}
console.log(chai(3+6))

const one = (num1 , num2) =>( num1 + num2)

console.log(one(5,6))

const addTwo = () => ({userName:"Alok"})

console.log(addTwo())