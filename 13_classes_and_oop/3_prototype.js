let myName = "Aditya   "
// console.log(myName.length);
// console.log(myName.truelength); // i want ki aya ek method ho trueLength ki

//now.
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "swing",

    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}


//ab aditya naam ka method saare objects, arrays, strings sab me use kar sakte he kyuki sab akhir me object hi hote he but reverse is not true
Object.prototype.aditya = function(){
    // console.log(`aditya is present in all objects`);
}

//array pe laga ke dekh he object me access kar pate he ki nahi
Array.prototype.heyAditya = function(){
    // console.log(`Aditya says hello`);
}


heroPower.aditya()
myHeros.aditya()
// heroPower.heyAditya() //heropower ek object he & since hamne arrays pe heyAditya naam ka mrthod define kia tha islie wo method object pe kaam nahi karega it means heyAditya ki power sirf array ke pass hi hoga
myHeros.heyAditya() //worked



//Prototypal Inheritance
//har object apne aap me ek instance he toh ye nahi ki apas me cheeze share kar rahe

//old approach
const user = {
    name : "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport ={
    makeAssignments : 'Js Assignments',
    fullTime: true,
    __proto__: TeachingSupport 
}
//ander hi nahi bahar bhi link kia ja sakta he

Teacher.__proto__ = user


//modern syntax
//kiski property, kon access kar sakta he
Object.setPrototypeOf(TeachingSupport, Teacher)

//interesting : making own object method
let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
console.log(`${this}`);
console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"aditya".trueLength()
"iceTea".trueLength()