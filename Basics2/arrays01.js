//array

const myArr =[0,1,2,3,4,5]

 //Array Methods
//  myArr.push(6)
//  console.log(myArr)
//  myArr.pop()
//  console.log(myArr)
//  myArr.push(6);
//  console.log(myArr)

myArr.unshift(9)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))

// console.log(myArr.indexOf(3))

// const newArray = myArr.join()
// console.log(myArr)
// console.log(typeof newArray);

//slice , splice

console.log("A", myArr)
const myn1  = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr)

console.log("A", myArr)
const myn2  = myArr.splice(1,3);

console.log(myn2);
console.log("B",myArr)