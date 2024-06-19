//while loop
let index = 0;
while(index <=10){
    // console.log(`Value of index is ${index}`);
    index = index+2;
}

let myArray= [`flash`, `ironman`,`batman`]
let arr =0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`) //accessing the element of array
    arr = arr +1;
}

//do while loop --> kaam pehle hota he condition baad me check hoti he , toh ye ek baar toh minimum execute hoga hi
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <=10);