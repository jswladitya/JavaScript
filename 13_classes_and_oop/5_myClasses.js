class User {
    // jaise hi class se ek object create hoga means jaise hi wo new keyword kaam me loge tabhi constructor apne app call ho jata he
    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password=password;
    }
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
