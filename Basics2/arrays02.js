const marvel_heros = ['thor', 'ironman', 'hulk']

const dc_heroes =['superman', 'batman', 'flash']

// marvel_heros.push(dc_heroes);

// console.log(marvel_heros[3]);

// console.log(marvel_heros.concat(dc_heroes)); return new array 

const allheros= [...marvel_heros, ...dc_heroes] //multiple values can be passed


// console.log(allheros);


const another_arr= [1,2,2,[4,5,6],3,4, [6,7, 4,5,[8, 9]]]

let real_array = another_arr.flat(Infinity) //opens all the subarrays

console.log(real_array);

console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) //converts to array 

// console.log(Array.from({name: "hitesh"})) //interestinfg

let score1 = 100
let score2 = 200
let score3 = 300
const arr2 =Array.of(score1, score2, score3) 
// console.log(arr2);