//global scope aur block scope ek dusre ke independent hote he
//jo aap block scope me variables declare karte use block scope me hi console.log karke dekh sakte he ya unpe operations perform kar sakte he global scope me wo kaam nahi karenge & similar for global scope
//NOTE:Exception ---> var kabhibhi use nahi karna he kyuki wo leak karta he block me se

let a = 20;
if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER :", a); // a = 10
}
// console.log(a); //a = 20
//Hence, dono hi a valid he yaha kyukie ek a global he & dusra a blocked he




//NESTED SCOPE
function one() {
  const username = "Aditya";

  function two() {
    const website = "youtube";
    // console.log(username);
    //ham ander wale scope me reh ke bahar wale scope ke values ko excess kar sakte he
  }
  // console.log(website); //hamne jab call kia toh line sequence ke according one function ka console log pehle execute hua usme error tha toh phir niche wala bhi print nahi hua 
  //ise comment kia mtlb ab sirf chota function hi kam kar raha 
  two()
  //chota bade se icecream mang sakta he means chote function me reh kar bhi ham bade wale ko excess kar sakte he kyuki uske lie toh wahi global he
}

one() 
//But bada chote ko excess nahi kar sakte he
//chota scope me jo bhi kuch declare kia he wo wahi khatam ho gya he



//lets see the same wrt nested if ---> learn again
if(true){
  const username = "Aditya"
  if(username === "Aditya"){
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website); //excess nhi hoga kyuki uska scope hi iyna hi tha & ham child ke ander wale chezo ko parents se excess karne kar rahe he --> 1st error solved
}
// console.log(username); //--> ye bhi excess nhi ho sakte uska bhi scope yaha nhi he





//::::: 2 techniques of declaring function :::::: 

//ye ek function he
// console.log(addone(5)) //error nhi bateyga if ham bina variable wale declared function ko kahi se bhi call kare
function addone(num){
    return num + 1
}
console.log(addone(5)) 

//ye bhi ek function he ---> ise expression bhi bol sakte he 
//kyuki yaha function ko variable me store karaya gya he

// console.log(addTwo(5)) //error ,ham variable ko uske declaration se pehle excess karre toh to error batayega
const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5)) 