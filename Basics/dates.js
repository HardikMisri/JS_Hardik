//Dates

let mydate = new Date();

// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());

let newDate = new Date(2025, 2, 23);
// console.log(newDate.toDateString());

let anday = new Date("2025-01-10");
// console.log(anday.toLocaleString());

let mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newday = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    
})