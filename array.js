// ARRAYS

const myArr = [0,1,2,3,4,5]

// ARRAY CAN BE DEFIFNED AS ANOTHER WAY

const myArr2 = new Array(1,2,3,4)
// in this we dont use square bracket 

// console.log(myArr[1]);

// console.log(myArr2[2]);

// Array Methods

// myArr.push(6) -- this adds the data in last of the array
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

// slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,4)

console.log(myn1); // RESULT: 1,2,3
// SLICE DON'T MANIPULATE ORIGINAL VALUE AND DON'T RETURN THE RANGE VALUE



console.log("B",myArr); // RESULT AFTER SLICE METHOD : [0,1,2,3,4,5]


console.log("A", myArr);
const myn2 = myArr.splice(1,4)
console.log(myn2); //RESULT : 1,2,3,4


// SPLICE MANIPULATES THE ORIGINAL ARRAY . IT ALSO RETURNS THE RANGE VALUE 

console.log("C", myArr); // RESULT AFTER SPLICE METHOD : 0,5

