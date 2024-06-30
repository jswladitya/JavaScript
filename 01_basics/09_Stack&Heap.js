
//There are 2 types of memory available

//STACK MEMORY : imaging collection of boxes one above the other
// 1.All primitive types stored in Stack Memory
// 2.Jab bhi stack memory use hoti he iska mtlb jo bhi variable declare kia he hamne ,hame uska copy milta he 


// HEAP MEMORY : a large box
// 1.All Non primitive types stored in Heap Memory 
// 2.jo bhi variable ya object heap me jata he toh hume uska reference milta he original value ka , jo bhi change karenge wo original value me change hoga


//example of stack memory allocation
let myYoutubename = "hiteshchoudharydotcom"
// ab ye variable ka value primitive type he toh ye jayega stack ke ander

// lets change the value & see 
let anotherName = myYoutubename

anotherName = "ChaiaurCode"

console.log(myYoutubename); //hiteshchoudharydotcom
console.log(anotherName); //ChaiaurCode
//we can see that anotherName ki value change ho chuki he
// hamne change kia copy ke ander toh original value change nahi hogi



//example of heap memeory allocation
let userOne ={
    email: "user@google.com",
    upi:"user@ybl"
}
//userOne ko reference mila direct heap me available object value ka

let userTwo = userOne
//yaha bhi value jo milti he wo bhi heap me available object ka hi reference milega

//lets change & see ki original value me hi change hota he
userTwo.email = "aditya@google.com"

console.log(userOne.email); //same value 
console.log(userTwo.email); //same value