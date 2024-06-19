//     ######### NUMS ###########
const score = 400
//console.log(score);
//yaha js ko pta he ki hamne number store kia he 

//but ham ye js ko explicitly bata sakte he ki humne number hi store kia he aur output me no. he ye dikhana
const balance = new Number(100)
//console.log(balance);
//Use above 2 lines to know about the methods or different properties 

//console.log(balance.toString()); // 100   //converted to string 
//console.log(typeof balance.toString()); //string 
//since ab string me convert ho chuka he toh pehle se number ke properties toh the hi ab ham string ke methods bhi use karsakte he

//console.log(balance.toString().length); //3 //means 3 characters he 100 me

//console.log(balance.toFixed(2));//100.00
//2 dia he mtlb 2 decimal tak print karega


const otherNumber = 123.8566
//console.log(otherNumber.toPrecision(3));//124
//3 dene pe 3 numbers print hoga other ni will be rounded off

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //1,00,00,000 //according to default american standards






//     ######### Maths ###########
//its also an object though have lots of preperties, ye library js ke sath by default aati he

console.log(Math);
//console.log(Math.abs(-3)); //3
//negative values ko positive me convert karta he aur positive values ko kuch nhi karta
//console.log(Math.round(4.6));//5
//console.log(Math.ceil(4.2));//5
//means 4 se thoda sa bhi jyada ho to 5 print karega
//console.log(Math.floor(4.9));//4
//means kam se kam values leni he
//console.log(Math.min(4, 5, 6, 8));//4
//console.log(Math.max(4, 5, 6, 8));//8


console.log(Math.random());// print random value each time mostly in decimal
//means 0 to 1 ke bich number deta he
console.log((Math.random()*10) + 1); 
//beacuse ye 0 bhi de sakte he islie +1 kia taki 0 toh output me na mile atleast
console.log(Math.floor(Math.random()*10) + 1);
//converted to print min value

//interseting 
//generating random numbers between any 2 numbers
const min = 10
const max = 20

//step 1--> Math.random() * (max - min + 1) + min, +1 kia taki 0 value na aaye & extra ek min add kai taki hame randon values 10 & 20 ke bich me mile
//just formula applied & then converted to print min value

console.log(Math.floor(Math.random() * (max - min) + 1 + min));


