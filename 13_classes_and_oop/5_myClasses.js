class User {
    // jaise hi class se ek object create hoga means jaise hi wo new keyword kaam me loge tabhi constructor apne app call ho jata he
    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password=password;
    }

    //Adding Functionality
    //he ye function hi but yaha inka naam nhi rakhte class ke ander 
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());




//Here, exactly what is happening behind the scene
//sabse pehle ek function hota 
function User(username, email, password){
    this.username= username;
        this.email= email;
        this.password=password;
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

