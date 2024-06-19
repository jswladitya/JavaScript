const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//better than foreach
// const newNums = myNumbers.map((num) => num + 46)

//we can use them all for chaining
const newNums = myNumbers.map((num) => num * 10)
                         .map((num) => num + 1)
                         .filter((num)=> num>50)
console.log(newNums);