

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "swing",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}




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