const name = "Hardik";
const age = 22;
// console.log(name+age);

console.log(`hello my name is ${name} and my age is ${age}`); 

const gamename = new String("Pubg-Hardik-misri");


console.log(gamename[0]);


//use console for below command
// console.log(gamename.__proto__); // This will show the prototype of the String object

// console.log(gamename.length)
// console.log(gamename.toUpperCase()); // Converts the string to uppercase


// console.log(gamename.charAt(2)); 

// console.log(gamename.indexOf('b'));

// const newStr =gamename.substring(0,2);
// console.log(newStr);

const antStr = gamename.slice(-5,-1);
console.log(antStr);

const newstr1 = " hardik    ";
console.log(newstr1);
console.log(newstr1.trim());

const url = "https://www.google%20.com"
console.log(url.replace('%20','-'));

console.log(gamename.split('-'));