const userEmail = "Aditya"
//yaha assign kie gye string ko true maan lia gaya he
//if string khali hota to false maan lia jata toh else run hota 
//lly, yaha empty array ko true maan lia jata he

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


//FLASY VALUES --> inke alawa sab truthy values hote he
// false , 0 ,-0 , BigInt ka 0n , null , "" , undefined , NaN

//truthy values interesting examples
// "0" , 'false' , " " , [] , {}, function(){}


if(userEmail.length === 6){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object iss empty");
}
//means , wo object ki keys ko array ke form me dekhega & ager object ki keys ka length 0 he to print kardo object is empty


// Nullish Coalesing Operator (??): made for null & undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 15 
val4 = undefined ?? 15 ?? 10


console.log(val1);//5
console.log(val2);//20
console.log(val3);//15
console.log(val4);//15 //means jo pehle milta he use leleta he


//TERNARY OPERATOR
// condition ? true : false 

const iceTeaPrice=50;
iceTeaPrice<=20 ? console.log("Less than 20"): console.log("more than 20");
//gvg