// const tinderObject = new Object();

// const tinderObject = {};

// console.log(tinderObject);

const tinderUser= {};

tinderUser.id = "123abc"
tinderUser.name="hardik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    name : "Hardik",
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "hardik",
            lastname: "misri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

//combining the objects

const obj1 = {
    1: 'a',
    2 : 'b'
}

const obj2 = {
    3: 'c',
    4 : 'd'
}

const obj3= Object.assign(obj1, obj2) //all values gets returned in obj1 
// console.log(obj3);
const obj4= Object.assign({}, obj1, obj2) // makes sure that {} //acts as target  object is merged according to documentation 
// console.log(obj4);

const obj5 ={...obj1, ...obj2} // same as array
// console.log(obj3)

const users= [
    {
        id :1, 
        email:"h@gmail.com"
    },
    {
        id :2, 
        email:"m@gmail.com"
    },
    {
        id :3, 
        email:"g@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)); //Return array of keys
/ console.log(Object.keys(tinderUser)); //Return array of keys

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged')) // return true or false


//-------------------------------------------------

const course = {
    coursename: "js in hindi",
    price : 999,
    courseInstructor :"hitesh"
}

//Destructreing  og objects
const {courseInstructor : teacher } = course
// console.log(teacher);
// console.log(amount)


//JSON________________JSON______________JSON____________

// {   //this is json as well as objecy

//    " name ": "Hardik",
//   "  coursename ":"js in hindi",
//     "price" : "free"


// }


// _________________________________________________
// 

[
    {},
    {},
    {}
]

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')) // return true or false
