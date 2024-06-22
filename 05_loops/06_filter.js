//if we store foreach loop in a variable
//then return statement is mandatory

// const coding = ["js", "ruby", "python", "java", "cpp"]

// const values = coding.forEach((item)=>{
// console.log(item); //js,ruby,python,java,cpp
// return item;
// })
// console.log(values); //undefined,  chahe return statement use karo ya na karo sabhi case me undefined hi print karta he


//lets use new example
//using filter ---> checks true or false statements
//map --> performs operations
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//jaise hamare pass foreach tha waise hamare pass filter opertion bhi hota he & ye bhi call back function hi leta he & yaha deni padti condition & ye return karta he in form of true or false
const newNums = myNums.filter((num) => num > 4)//1st method
//prints only that numbers, which are greater than 4
const newNums2 = myNums.filter((num) => { return num > 4 }) //2nd method , means if curly bracket use kar rahe means ager scope je likh rahe ho to always use return statement 

// console.log(newNums);
// console.log(newNums2);


//doing same thing using foreach --> learn while revision



//interesting example'
const books = [
    //ye saare jo objects he wo ek ek books he
    {
        title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book two', genre: 'history', publish: 1981, edition: 2004
    },
    {
        title: 'Book three', genre: 'science', publish: 1981, edition: 2004
    },
    {
        title: 'Book four', genre: 'history', publish: 1981, edition: 2056
    },
    {
        title: 'Book five', genre: 'Non-fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book six', genre: 'science', publish: 1985, edition: 2002
    },
    {
        title: 'Book seven', genre: 'history', publish: 1976, edition: 2003
    },
    {
        title: 'Book eight', genre: 'science', publish: 2003, edition: 2004
    },
    {
        title: 'Book nine', genre: 'Non-fiction', publish: 2000, edition: 1999
    },
]

let userBooks = books.filter((bk)=>bk.genre === 'history') //yaha hamne har ek book ko bk maan lia

//since userBooks already declared ho chuka he toh use wapas declare nhi karsakte bas rewrite kar sakte he
userBooks = books.filter((bk)=>bk.publish >= 2000 && bk.genre==='science')
console.log(userBooks);