function SetUsername(username){
    //maan lo hamne yaha complex DB calls bhi kardia he
    this.username = username;
}

function createUser(username, email, password){
    //hamne already username le lia he user se toh baar baar toh lenge nhi islie SetUsername function ko hi call kara do jisme username lia he
    // SetUsername(username)
    SetUsername.call(this,username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "Chai@fb.com", "123")
console.log(chai); //ab ayi pe problem yaha email aur password toh aa gye but username nahi aya jo SetUsername ne set kia tha
//means abhi call nhi ho rha he so call karne ke lia SetUsername ko use karo '.call' but ise bhi kaam nahi hoga kyuki printed object me koi change nhi milega
//so use 'this ,' keyword
//means first parameter this pass karna hota he jab call karte he kisi dusre function ki property ko 


//call hamara current execution context kisi aur function ko pass kar deta he