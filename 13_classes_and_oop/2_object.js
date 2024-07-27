function MultiplyBy5(num){
    return num+5;
}
MultiplyBy5.power =2

console.log(MultiplyBy5(5)) //10, as axpected
console.log(MultiplyBy5.power) //2 , as expected

console.log(MultiplyBy5.prototype) //{}
/*
it means in javascript everything can be treated as objects
ie.., function, function bhi he aur object bhi he kyuki function ka jo default behaviour hpta he wo toh hota hi he but, function ko object ki tarah bhi behave kara sakte he
because end of everything har ek cheez ja ke milti he object se hi due its javascript's prototypal behaviour or prototypal inheritance
& if object pe koi functionality add karte he to wo functionility sabhi child ko milti he eg..,Array, String but reverse is not true
*/


function createUser(username, score){
      this.username = username
      this.score = score
}

//adding or injecting our own functionality in prototype kyuki prototype ke ander wahi hota he
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

//jab apne function ka chai me values transfer kari toh apne bataya nhi ki ye additional properties ayi he createUser me
//ab is function ke users alag alag ho sakte he
// const chai = createUser("chai", 25)
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/