
//pass the parameter but you don't know how mant parameters are
//there
//Use the rest operator 

function calculateCartPrice(...num1){ // right now rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 300, 500, 600, "abc"));

const user ={
    username: "Hardik",
    age: 20

}

function isLogged(anyobject){
    console.log(`my name is : ${anyobject["username"]} and my age is ${anyobject["age"]}`);
}

// isLogged(user);
isLogged({  //directly passing object in function
    username: "Sam",
    age:399
})

const myarr = [200,400,100,600]

function returnsecondval(getArray){
    return getArray[1];
}
console.log(returnsecondval(myarr));