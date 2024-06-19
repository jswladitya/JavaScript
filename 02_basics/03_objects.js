//Objects ko declare karen ke 2 tarike he --> litterals ki tarah and constructer ki tarah
//singleton--> ko bhi constructer se ham object banate he toh singleton banta he & if ham litterals ki tarah object declare karte he toh singleton nhi banta he

//Object literals

//Note: to use symbol as a key toh usse left side me box me likho 
const mySym = Symbol("key1") //hamne key1 naam ka ek symbol declare kar dia ab ham ise object me isme value assign karenge means as a key use karenge symbol ko
//NOTE: if ham box nahi dete toh bhi value to sahi batayega par uska key symbol nahi hoga wo string hoga

const JsUser = {
    //key-value pairs banta he
    name: "Aditya", //: ke left wale ko js string manta he but ager use ham string ki tarah na likhe toh koi problem nhi hota
    [mySym]: "mykey1",
    age: 18,
    email:"jaiswaladitya116@gmail.com",
    isLoggedIn:false
}

//To Excess objects
console.log(JsUser.email);// do not use this method means dot wala method to excess objects in js 

console.log(JsUser["email"]); //means box me string
console.log(JsUser[mySym]);

//object me change kaise karte he,. & = use karo
JsUser.email = "adityathespiderman@gmail.com"
console.log(JsUser);

JsUser.freeze(JsUser) //JsUser object ko freeze kardia taki koi object me kuch change nahi kar paye

//learn later --> about function
