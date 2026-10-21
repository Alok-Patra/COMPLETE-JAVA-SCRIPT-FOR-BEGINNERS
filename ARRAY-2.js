const marvel_heroes =["thor","ironman","spiderman"]

const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// console.log(marvel_heroes[0]);

// const allHeroes = marvel_heroes.concat(dc_heroes)  this adds two arrays same as ...___ but it only does only with 2 but ...___ does as much array you want to add
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]

// console.log(all_new_heroes)  // this give a new array included both the array

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// CONVERION OF DATA 
// console.log(Array.isArray("Alok")) -- Results "fasle "
// console.log(Array.from("Alok"));
// console.log(Array.from({name:"alok"}));  // it gives empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



