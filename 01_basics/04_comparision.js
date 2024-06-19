/*
//comparision operators
//we cannot compare 2 differnt datatypes
console.log(2 > 1); //greator than
console.log(2 >= 1); //greator than equal to
console.log(2 < 1); //less than
console.log(2 == 1); //equal to
console.log(2 != 1); //not equal to
*/



console.log("2" > 1); //true
console.log("02" > 1); //true
//since we know that 2 diff datatypes ko compare nhi karsate 
//but , yaha pe js ka compiler string ko no. me convert karta he for comparision
//mtlb strictly checking nhi hoti



/* 
//COMPARISONS TO BE AVOIDED
console.log(null > 0); //false
//since kuch nhi he kam hote he kuch toh he se
console.log(null == 0); //false (Equality operator) 
//since kuch nhi he kam hote he kuch he
console.log(null >= 0); //true
//in 3rd null se converted to 0 first and then comparision begins


//similarly
console.log(undefined == 0); //false
console.log(undefined < 0);//false
console.log(undefined > 0);//false
*/


//Strict check ===
//checks datatypes & values both , conversion nhi hota jaise == me hota tha
console.log("2" === 2); //false