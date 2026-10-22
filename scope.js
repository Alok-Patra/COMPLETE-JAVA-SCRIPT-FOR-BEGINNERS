let a=400
let c = 200

if(true){
    let a = 10
    const b = 20
    let c = 30
   // console.log("Inner:",c);
    
}

// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const userName = "Alok"

    function two(){
        const website = "Youtube"
        console.log(userName);
        
    }
    // console.log(website);
       //two()
}
//one()

if (true){
    const username = " Alok"
    if(username==="Alok"){
        const website = "Youtube"
       // console.log(website);
        
    }
    //console.log(website);
    
}
//console.log(username);
console.log(addone(5))
function addone(num){
        return num + 1
}

addTwo(5)       // HERE IT GIVES ERROR BUT PREVIOUS FUNCTION DOESNOT GIVES ANY ERROR JUST BECAUSE OF HOSTING 
const addTwo = function(num){
    return num + 2
}
