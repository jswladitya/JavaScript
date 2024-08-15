class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // i want ki jaise hi user bane waise hi use ek unique id assign ho jaye
    //static keyword is method ko access hone se rok deta he since ham id ka access sabko nahi dena chahte
    static createId(){
        return `123`
    }
}

const aditya = new User("aditya")
// console.log(aditya.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = Teacher("Iphone", "i@phone.com")
console.log(iphone.logMe());