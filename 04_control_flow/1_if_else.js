//if-else --> condition true hua toh if ke scope ke ander jo instruction he wo run honge nhi to else ke

//Comparision operators --> dono ke datatypes same hone chahiye
//< (less then) , > (greater then) , <= (less then or equals to) , >= (greater than or equals to)
//== (equals to : just checks values , not strict checking) , != (not equals to)
// === (strict equal : checks values & datatype both ) 

//examples
if (2 == "2") {
//   console.log("Executed"); //print executed because condition become true
}
if (3 === "3") {
//   console.log("Executed new"); //not print , because condition is false
}


//scope 
const score = 200

if(score > 100){
    let power = "Fly"
// console.log(`User power : ${power}`); //ham scope ke ander execute karwa rahe he toh ye toh run hoga
}
// console.log(`User power : ${power}`); // error , ham scope ke bahar execute karwa rahe he toh ye toh run nhi hoga



// const balance = 1000
// if(balance < 500){
//     console.log("balance is less than 500");
// }
// else if(balance < 700){
//     console.log("balance is less than 700");
// }
// else if(balance < 900){
//     console.log("balance is less than 900");
// }
// else{
//     console.log("balance is less than 1200");
// }


//logical operator
const userLoggedIn = true
const debitCard = true
const userLoggedInfromGoogle = false
const userLoggedInfromEmail = true

if(userLoggedIn && debitCard){
    // &&(and)--> all conditions must be true
    console.log("You are allowed to shop");
}
if(userLoggedInfromEmail || userLoggedInfromGoogle){
    // || (or)--> anyone condition must be true
    console.log("user Logged in");
}
