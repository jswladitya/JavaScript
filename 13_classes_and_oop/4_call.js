function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    SetUsername(username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "Chai@fb.com", "123")
console.log(chai);


//call hamara current execution context kisi aur function ko pass kar deta he