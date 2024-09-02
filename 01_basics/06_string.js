const name = "Aditya"
const MyRepoCount = 50
 
// console.log(name + MyRepoCount + " Value"); //outdated stntax 

//instead use this syntax called string iterpolation
console.log(`Hello my name is ${name} and my repocount is ${MyRepoCount}`);


//we have 1 another way also to declare string
//const name = "Aditya" //1st way

//2nd way
const gameName = new String('Adit-y-a')
//here we have used "new" keyword means we can use objects in js
//means string ek object he yaha pe
//Use this above line to know all the methods in browser's console

//How to access keys(0->A, 1->d ...)
console.log(gameName[0]); //A

//playing with string methods
console.log(gameName.__proto__); //{}means object mila he, 2 underscore he
console.log(gameName.length);//8

console.log(gameName.toUpperCase());// print original string in uppercase
console.log(gameName.charAt(3)); //t , 3rd index pe konsa character he
console.log(gameName.indexOf('i')); // 2 , i konsi position pe he

const anotherString = gameName.substring(0,4)
//Give start number & End Number
//will print Adit not y 
//cannot use negative values
console.log(anotherString); //Adit

const newString = gameName.slice(0,4)
//will slice adit not y
//can use negative values
console.log(newString); //adit


const newStringOne = "   aditya   "
console.log(newStringOne);//   aditya
console.log(newStringOne.trim());//aditya
//unwanted spaces remove kar deta he


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
//replace %20 with -
console.log(url.includes('hitesh'));
//kya url ke ander hitesh he ki nhi
//print true


console.log(gameName.split('-'));
//mtlb split karo string ko in arrays basis on -
// [ 'Adit', 'y', 'a' ]