/*
NOTE:
Kis tarah se data ko memory me rakha jata he aur access kia jata he us basis pe data ka 2 catogarisation he 

1.primitive (call by value hote he)
7 types --> string, no. , null, Boolean , undefined , Symbol , BigInt

2.Non primitive or reference type
types ---> Arrays , objects , Functions

NOTE: js is dynamically typed language
NOTE: jitne bhi non primitive type he inka datatype object hi hota , bas function wale datatype ko object function bolte he
*/

//Primitive datatypes examples
const score = 100 //no.
const scoreValue = 100.3 //no.

const isLoggedIn = false //boolean
const outsideTemp = null //null 
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//dikhne me dono ki value same lag rha he but output same nhi he
console.log(id === anotherId); //false


const bigNumber = 367756789089686789n
//last me n laga denge toh wo BigInt ban jayega




//Non primitive types examples
const heros = ["Iron-Man", "Spider-Man", "Super-Man"] //Arrays


//object
let myObject = {
    name : "Aditya",
    age:20,
    //obect ko key maping me likha jata he 
    //chahe toh object ko ham variable me store nhi bhi kar sakte he
}


//function
const myFunction = function(){
    console.log("Hello World");
}



//Lets check 
console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue); //no.
console.log(typeof myFunction); //function
//function ka datatype function hi hota he par ise bolte he object function 
console.log(typeof myObject); //object







