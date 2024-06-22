const myNums = [1,2,3]

const myTotal = myNums.reduce( (accumulator, currentValue) => {
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);

    //since hamne variable me store kia he & scope me likha he toh return statement daalna padega
    return accumulator + currentValue
},0) // <-- yaha ham jo value dalte he wo accumulator ki initial value hoti he

console.log(myTotal);





//example
const shoppingcart =[
    {
        course : 'Js course',
        price : 1999
    },
    {
        course : 'py course',
        price : 3999
    },
    {
        course : 'mobile dev course',
        price : 5999
    },
]

const PriceToPay = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log(PriceToPay);