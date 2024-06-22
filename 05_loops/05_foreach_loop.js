const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function(val){
//     //since isme callback function likhna hota he islie yaha function ka naam nahi likha jaata
//     console.log(val);
// })



//another method for inputting callback function
// coding.forEach( (val) => {
//     console.log(val);
// }  )



//another method --> function declare karane ke  baad use pass on karana for each me
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe) //NOTE: reference dena he



coding.forEach((item,index,arr)=>{
    //not just items , we can even access index & whole array using for each
console.log(item,index,arr);
})


//array ke ander multiple objects ko kaise access karte he
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})