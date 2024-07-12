//for of loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//Map datatype --> The map object holds key value pairs and remembers the original insertion order of the keys. Any values (both objects and primitive values) may be used as either a key or a value , NO duplicate values only unique 
//maps are iteratable

const map = new Map() //M capital hona chahiye
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', " france")
// map.set('IN', "india") //ye phirse nahi print karega because map unique values ko print karta he
// console.log(map);

//Lets Apply For of loop on map
// for (const key of map) //key & value alag alag array print hoga

//we need to destructure it so that it prints keys & values different
for (const [key , value] of map) {
    
    // console.log(key, ':-', value);
}


//NOTE:- objects are not iteratable for FOR OF Loop, so we Use FOOR IN Loop
//example

// const myObject = {
//     game1 : "NFS",
//     GAME3: "GTA"
// }
// for (const [key, value] of object) {
//     console.log(key, ":-" , value); // Error
// }