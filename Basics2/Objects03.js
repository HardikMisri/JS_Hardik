//objects

//Singleton : Object is its own type
//object.create

//object literals
//object : key-value is used here 
//object treats key-value as string

//symbol
const mysym = Symbol("key1")


const user ={  
    name : 'Hardik',
    "full name" : "Hardik Misri",
    [mysym] : "mykey1",  ///now the type will be become symbol
    age :18,
    location:" Delhi",
    email: "Hardik@google.com",
    isLoggedIn: false


} //This is object


//How to Access objects 

// console.log(user.email);
// console.log(user["email"]);  //correct way to access the node  
// console.log(user["full name"]);

console.log(user[mysym]);

user["email"] = "hardikmisri@meta.com"
console.log(user["email"]);

//Object.freeze(user);
user["email"] = "hardikmisri@mgoogle.com"
// console.log(user);


user.greeting = function(){
    console.log("Hello js user")


}

user.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}


console.log(user.greeting());
console.log(user.greeting2());




