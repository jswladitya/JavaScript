//Parts of oop --> constructor function, prototypes, classes, Instances (new, this keyword kaise aye)

//4 pillars of oop : Abstraction, Encapsulation, Inheritance, Polymorphism


//objects ---> collection of properties and methods
//object literal
const user = {
    username: "Aditya",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got User Details From Database ");
        // console.log(`username: ${this.username}`);
        //it tells ki ham current context ki baat kar rahe he & ager nahi lagayenge this toh error throw hoga because function apna alag execution context banata he 


        //sirf this print karaye toh current context dedega 
        // it is like function ko bolna ki yaha se ie.., is context se ja kar values lo
        // console.log(this);

    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


//NOTE : if this ham global context me print karaye node env me toh empty object aayega & if browser me ja ke same cheez kare toh waha window as an global object ayega
// console.log(this); //{}






//constructor function

// const promiseOne = new Promise()
// const date = new Date()
// NOTE: new keyword is actually a constructor function, constructor function allows to make multiple instances in 1 object literal taki baki values affect na ho us object me
//new keyword makes new context or new instance & isi ko constructor function bolte he

// NOTE: Working Mechanism ::: jaise hi new keyword use karte he to ek empty object create hota he jisko instance bola jata he & ek constructor function call hota he new keyword ke karan , phir this keyword jitne bhi arguments likhe he wo sab uske ander inject ho jate he & then finaly wo function ke ander mil jate he


//example
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // left side wala hamara variable he & right wala wo he jo ham pass karke dene wale he
    // return this //ye bydefault return hota hi he likhne ki zarurat nahi he
}
// const userOne = User('aditya', 23, true)
// console.log(userOne); //perfectly fine till here

// const userTwo = User('Code', 3, false)
// console.log(userOne); //yaha userTwo ne userOne ke data ko overwrite kar dia


//now,
const userOne = new User("aditya", 12, true)

const userTwo = new User("code", 11, false)
console.log(userOne); //getting data of userOne only coz new keyword created new context or instance
console.log(userTwo); //same way here

//new keyword apko ek alag copy dedeta he ab us copy ke sath kya karte ho wo apke hawale he app jo karte ho uske sath wo original me effect nahi daalti

