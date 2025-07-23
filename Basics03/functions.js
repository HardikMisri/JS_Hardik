//functions



function saymyName() {
    console.log("hardik Misri");
}

// saymyName(); //callling 

function addnumbers(num1 , num2){
    console.log(num1+num2)
    return num1+num2;

}
function addtwonumbers(num1 , num2){
    // console.log(num1+num2)
    let res = num1+num2; 
    return res;

}

const ans = addtwonumbers(2, 3); 
// console.log(ans)

function loggeduser(username = "sam"){ // setting default value
    // if(!username){
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} is logged in`
    
}
console.log(loggeduser());