let a =300;
if(true){//scope of that program
    let a = 10
    const b = 20
    var c = 30
} 
// console.log([c]); //scope is not possible for var 
// console.log(a);

function one(){
    const username = "hardik"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website); not able to run
    //as out of scope
    two()
}
// one()

if(true){
    const username="hardik"
    if(username === 'hardik'){
        const website = " youtube"
        // console.log(username + website)
    }
}


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log(addone(5)) //can access the function
function addone(num){
    return num+1;
}

console.log(addTwo(5)) //cannot access the function
const addTwo = function(num){
    return num+2
}
