
//functions ke through getters setters laga rahe
function User(email, password){
    this._email = email
    this._password= password

    //this as a first parameter dena hota he iske pass khud ka this avaiable nhi hota
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUppercase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUppercase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User ("chai@chai.com", "chai")

console.log(chai.email);
