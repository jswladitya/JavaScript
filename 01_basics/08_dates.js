//its also an object & iske properties date ko bas alag alag formats me show karte he
let myDate = new Date()
// console.log(typeof myDate); //object

// console.log(myDate); //current date print but not readable 

// console.log(myDate.toString()); //date printed in readable format 
// console.log(myDate.toDateString);

/*
//Assignment ---> use all to....
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());
*/


//let myCreatedDate = new Date(2023, 0, 23) //Year Month Date //one way 
//Month 0 se start hote he js me if writing not with quotes
//we can also parse dates like ,another way
let myCreatedDate = new Date("2023-01-14") //yy mm dd

// console.log(myCreatedDate); //Not readable 
// //convert it to readable using methods
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
//just another way to declare date

// console.log(myTimeStamp);//1st jan 1970 waha se le karke abhi tak ka millisecond me time he
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));
//1.date.now() krke hamne pehle millisecond me ab tah ke time nikal lia 
//2.  /1000 kia taki millisecond se second me convert ho jaye
//3.  Math.floor kia taki hame value or time decimal me na mile 

//if hame current date me se month, day etc janna ho
let newDate = new Date() //gives current date
console.log(newDate); //gives current date
console.log(newDate.getMonth); //month batayega jo ki js me 0 se start hota he

