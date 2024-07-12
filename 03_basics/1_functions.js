//NOTE: function ko define karte time jo input parse karate he wo parameters hota he & call karte time jo bhi values parse karate he wo argument hota he
//NOTE: ager call karte time jab kuch argument pass nahi kia to undefined print hoga

function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}

// sayMyName //sirf itna likhna means referance dena us function ko, kuch nahi hoga sirf itna likhne se
// sayMyName() //ise kehte he execute karna or call karna us function ko 


//add 2 numbers ka function
//method 1
// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4) //7
// addTwoNumbers(3,"4") //34
// addTwoNumbers(3,"a") //3a
// addTwoNumbers(3,null) //3

//Method 2
function addTwoNumbers(num1,num2){
    //method 1
    // let result = num1 + num2
    // return result

    //method 2 --> taki new variable declare na karna pade
    return num1+num2
    // console.log("Aditya");//not be printed
    //return statement ke baad koi kaam nahi hoga 
    //ager return statement nahi likhna toh curly bracet mat lagao, direct likhdo  
}
const result = addTwoNumbers(3,5)
//Note: jab bhi kuch return karte he toh use call karte time ham use function ke bahar new variable me store karte he & phir console.log karke print karate he
// console.log("Result :", result);


function loginuserMessage(username){
    return `${username} just logged in`
}
// loginuserMessage("Aditya") //function ko call zaroor kia he but ye puch print nahi karega kyuki hamne bola nahi he console use karna padta he
//NOTE: jab koi argument hi pass nhi karoge toh undefined print hoga

// console.log(loginuserMessage("Aditya"));



//how to add multiple items in a cart
function calculatecartPrice(...num1){
    return num1
    //NOTE: parameter (num1) likhne se sirf ek hi item or value cart me show hoga to ham (...num1) likhenge taki multiple values cart me show hoga array ke form me
    //NOTE: ye jo ... he isiko rest ya spread opertor bola jata he depends on use case & abhi isko rest bol rahe. It just means in teeno ko ek bundle me pack karo aur mujhe dedo
}
console.log(calculatecartPrice(200,300,400))
//NOTE: if parameter me (val1, val2,...num1) ho it means 200 & 300 val1 and val2 me jayega and 400 jayega num1 me (cart me)



//Lets see object ko function me kaise pass karte he & use karte he
const user = {
    username : "Aditya",
    price: 199
}

function handleObject(anyobject){
    //NOTE: mana ki hamne user ye ek object banaya he but anyobject is parameter se kisibhi object ke data ko excess kar sakte he ek dot lagake
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) //method 1
//method 2 : better method --> zarrori nahi tha ki object banake hi pass karna tha so ham direct object bhi pass(call) kar sakte the
handleObject({
    username:"Sam",
    price: 399
})

//Lets see Arrays ko kaise pass karte he
const myNewArray = [200,300,400,500]

//hamne ek function banaya jo ki kisi bhi array ka second value batayega
function returnSecondValue(getArray){
     return getArray[1]
}

// console.log(returnSecondValue([200,300,400,500])) //method 2
console.log(returnSecondValue(myNewArray)) //method 1


