//####### CONVERSION OF DATATYPES #######

//CONVERSION TO NUMBER
/* 
// CASE 1 ---> number
let score = 33 

console.log(typeof score); // number 
console.log(typeof (score)); // number 
*/



/* 
CASE 2 --> 1.string ke ander pure number
           2.string ke ander "33abc" convert to ho jayega & typeof me number bhi batayega par, it will print NaN(not a number) ager ham uska value check karenge (ie.. console.log(valueIn Number)) because wo number me convert nhi ho sakta 

let score = "33" 
console.log(typeof score);  //string

//we have given the score in string but we want it in number
let valueInNumber = Number(score) //converted to number , 1st letter must be capital
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33
*/



/*
//CASE 3--> null
let score = null
console.log(typeof score); //object
//we have given the score in string but we want it in number
let valueInNumber = Number(score) //convert object to number
console.log(typeof valueInNumber);  //number
console.log(valueInNumber); // 0
*/



//"33"---> 33 (number me convert ho jata he)
//"33abc"--->NaN ,but type uska number hoga
//undefined --> NaN
//"aditya"--> NaN , because ye aisa string he jo number me convert nhi ho sakta
//true --> 1, false --> 0



//CONVERSION TO BOOLEAN
let isLoggedIn = 1;
//console.log(typeof isLoggedIn); //Number

//let convert it into a boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
// converted to boolean

//console.log(typeof booleanIsLoggedIn); //boolean
//console.log(booleanIsLoggedIn); //true

//1--> true , 0 --> false
//""--> false (Empty string)
//"aditya"--> true



//CONVERSION TO STRING
let someNumber = 33;
//console.log(typeof someNumber); //number

//let us convert it to string
let stringNumber = String(someNumber);
//now it is converted to string

//console.log(typeof stringNumber);
//console.log(stringNumber); //dikhne me number jaisa lag rha he but string he




//########### OPERATIONS ###########
let value = 3;
let negValue = -value; // hamne ise ye assign kia ki ye hame negative of value dega
// console.log(negValue); //-3

/*
console.log(2 + 2); // addition
console.log(2 - 2); //substraction 
console.log(2 * 2); //multiplication
console.log(2 ** 2); //exponential 
console.log(2 / 2); // division
console.log(2 % 2); //remainder operator
*/

//Addition of strings
let str1 = "Hello";
let str2 = " Aditya";
let str3 = str1 + str2;
// console.log(str3); //Hello Aditya

/*
//Addition of number and string
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
//Concept ---> ager string starting me he toh, sabko as a string mana jata he
console.log(1 + 2 + "2"); //32
//Concept --> pehle number he toh unhe add/sub kia jata he 

*/

//########## intersting ############
// console.log(true); //true
// console.log(typeof true); //boolean
// console.log(+true); //1
// console.log(true+); // not possible


let GameCounter = 100 
GameCounter++ ;
console.log(GameCounter); //101
//assignment--> prefix postfix in mdn
//link -->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment