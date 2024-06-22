
//'this'keyword understanding
const user = {
    username: "Aditya",
    price: 333,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        //means is scope me jitne bhi variables he unhe excess karne ke lie this lagate he

        //NOTE: sirf this print karaye toh wo apne object ka pura current context print karega
        // console.log(this);
    }
}

// user.welcomeMessage() 
//welcomeMessage ek function he toh use excess karne ke lie () lagaya
//print: aditya, welcome to webiste
// user.username = "Sam" 
//we changed the username means we have changed the current context, ab username is current context me Sam he na ki aditya
// user.welcomeMessage()
//print: Sam, welcome to webiste




//if ham globally node environment ke ander this print karaye toh wo empty object print karega
console.log(this); //{}

//but
// console.log(this); //window object will get printed , node environmrnt ke bahar means browser






//using function ---> Method 1
// const chai = function (){
//     let username = "aditya"
//     console.log(this);
       //node ke ander function ke thorough this print karaye to bhot se chheze print hoti he

       //& console.log(this.username)
       //aditya will not get printed, because this works for object not function
// }




//Arrow function ---> Method 2
//ARROW FUNCTION ---> function ya function ka naam hatao aur bracket ke baad arrow lagao
const chai = () => {
    let username = "aditya"
    // console.log(username);
}

chai()


//example
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }  //if function me statements jyada he

const addTwo = (num1, num2) => (num1 + num2) // if function me statements 1 line ka he

// console.log(addTwo(3,4));

//curly bracket me wrap kia toh return statement likhna padega & ise kehte he explicit return
//normal bracket me wrap kia ya nhi kia phir bhi return statement likhne ki zaroorat nahi he & ise kehte he implicit return 

