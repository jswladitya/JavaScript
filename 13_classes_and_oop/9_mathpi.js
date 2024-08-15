//******* Learn Again ********
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
//here aap ne toh overwrte kardi par wo overwrite hui nahi kyuki writable : false kari gyi he
//to usi tarike se ham apna custom object ki proerty bana sakte he aur usme hard coded values daal sakte he taki koi unhe overwrite na kar sake

//if hame kisi object ki property ke baare me specilly janna he 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") 
// console.log(descripter); //data


//Creating object
const chai = {
    name : "ginger chai",
    price : 455,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined , because ham property ka description mang rahe he toh ye address karna padta he ki kis property ka description chahiye
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //yes got it

//lets manipulate its properties
// Object.defineProperty(chai , 'name',{
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); //yes got it

//lets apply loop
//chai ek object he toh wo to iteratable nhi he for of loop me so we use Object.entries(chai)
for (let [key, value] of Object.entries(chai)){
   if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
   }
    
}