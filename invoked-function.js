// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // NAMED IIFE
    console.log(`DB CONNECTED`);
    
}) ();

((name)=>{
    
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`ALOK`)