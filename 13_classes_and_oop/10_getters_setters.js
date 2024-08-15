//we use getters & setters for security purposes means we dont want ki koi hamara confedentail chheze access kare

class User {
    constructor(email, password){
        this.email= email;
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }

    //setters ko return nahi karte 
    set email(value){
       this._email = value
    }

    get password(){
        return `${this._password}aditya`
    }

    set password(value){
        this._password=value
    }
}
const aditya = new User("aditya@123", "123")
console.log(aditya.password);
console.log(aditya.email);