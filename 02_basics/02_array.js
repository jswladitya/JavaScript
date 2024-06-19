const marvel_heros = ["Spiderman", "MoonKnight", "Ironman", "thor"]
const DC_heros = ["Flash", "Aquaman", "superman" ]

// marvel_heros.push(DC_heros) //marvel_heros me ham DC_heros ko daal rahe he , but wo As an array hi chale jate he 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//hence, excessing the Element of an array is getting difficult



//So, we have another syntax for the same
// const allHeros = marvel_heros.concat(DC_heros)
//concat new array ko return krta he islie ham ise new variable me lete he
//console.log(allHeros);//we got what we wanted


//spread operation on arrays
//eg. 2 kanch ke glass lo jinme marbles ho ab dono niche girkr tutenge toh sab bikahr jayenge and sabko milake ek naya array banega 
//multiple arrays ke elements ko leke unhe ek array me show krta he
const all_new_heros = [...marvel_heros,...DC_heros] //teen dots lagana jaroori he

console.log(all_new_heros); //Same output as above cancat wala operation we see
//its basically the another way for the same , most used



//NEW EXAMPLE ---> to make all the elements of original array having multiple depth should come into 1 single array of no depth

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //having depth of 2
const real_another_array = another_array.flat(Infinity) //depth infinity dene se kitna bhi depth ho cure hojata he means sab ko ek array me le aata he
console.log(real_another_array);



//INTERESTING -->  Converting to array

console.log(Array.isArray("Aditya"));//ham isse puch rahe he ki kya ye array he //False 

//Converting to array
console.log(Array.from("Aditya"));//Now its an array
console.log(Array.from({name:"Aditya"})); //[]object ko array me convert nahi kar paya islie empty box print karega

//similarly
let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2,score3)); //we are telling ki is teeno ko ek single array me daal do
