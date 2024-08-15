//not used in recent times, mostly class based syntax milega

const User = {
    _email : 'h@hc.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        rhis._email = value
    }
}

//using factory functions
const tea = Object.create(User) //means User ke base pe ek object create karo aur usko tea ke ander refer kardo
console.log(tea.email);
