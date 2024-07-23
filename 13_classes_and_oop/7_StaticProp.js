class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

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