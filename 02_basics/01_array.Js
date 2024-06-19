//Arrays ---> collection of multiple mixed items in a single variable

//ways of declaring Arrays 
const myArr = [0, 1, 2, 3, 4, 5, 8];
const myHeroes = ["Ironman", "shaktiman", "Spiderman"];
const myArr2 = new Array(1,2,3,4,5,7)


//to excess arrays elements
// console.log(myArr[0]); //0 , 1st elements ki indexing 0 se start hoti he



//ARRAY METHODS

// myArr.push(6) //Original array me new element 6 add kardo , now array is updated
// myArr.push(7) //now array is updated
// myArr.pop() //last element removed,now array is updated
// console.log(myArr);

myArr.unshift(9) //new element 9 will be inserted in the starting of original array
myArr.shift() //jo 9 hamne dala tha starting me use hamne remove kardia , shift me ham argument nahi dete jo unshift karta he usi ko reverse karte he shift

// console.log(myArr.includes(9));//false
//Array me 9 include he ya nhi
// console.log(myArr.indexOf(9));//-1 , Means nhi present he 9

// console.log(myArr.indexOf(3));//3 , means present he 3



const newArr = myArr.join() //string me convert karta he original array ko
// console.log(myArr); //print in Array format
// console.log(newArr); //print in String format
// console.log(typeof newArr); //string(hence proved)




//SLICE , SPLICE
//slice
console.log("A ", myArr); //original array print

const myn1 = myArr.slice(1, 3) // 1st, 2nd element of array include but 3rd not 
console.log(myn1); //sliced wala print hoga
console.log("B ", myArr) ; //original array manipulatr nahi hua

//splice
const myn2 = myArr.splice(1, 3)//range include hota he
console.log("C", myArr); //original array print nhi hoga ab kyuki splice ne manipulate kardia, & slice original array ko manipulate nahi karta
console.log(myn2);