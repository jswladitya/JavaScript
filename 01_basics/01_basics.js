//Let & var ---> used for declaring variables
// const ---> used for declaring constants

const accountId = 144553
//const cannot be modified or redeclared
let accountEmail = "jaiswaladitya116@gmail.com"
// its a let , so it can be modified but cannot be redeclared  
var accountPassword = "12345"
// its a var , so it can be modified also can be redeclared 
accountCity = "jaipur" // Dont use this method
let acccountState;
// ager Js me, variable me ham kuch store nhi karte toh js use undefined maan leta he


// accountId = 2 // not allowed , its a const
accountEmail = "kuchBhi@gamil.com" //allowed 
accountPassword = "1234567879" //allowed 
accountCity = "bengaluru" //allowed 


console.log(accountId); // method 1 

//Method 2 ---> it will print in tabular form
console.table([accountEmail , accountId , accountPassword , accountCity , acccountState])


/*
Dont use var 
because of issue in block scope and functional scope
*/