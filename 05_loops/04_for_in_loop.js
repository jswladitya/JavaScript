
//Applying for in loop
const myObject ={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}

//we use for in loop on object
for (const key in myObject) {
    // console.log(key); //js, cpp, rb, swift
    // console.log(myObject[key]); //means saare key ke corresponding values dedo

    // console.log(`${key} shortcut is for ${myObject[key]}`); //will print key and its value 
}



//on arrays
const programming = ["js", "rb" , "py","java", "cpp"]
for (const key in programming) {
   console.log(programming[key]); //js, rb,py,java,cpp
}


//lets see for in loop works on map or not
// const map = new Map() //M capital hona chahiye
// map.set('IN', "india")
// map.set('USA', "united states of america")
// map.set('Fr', " france")
// map.set('IN', "india") 

// for (const key in map) {
//     console.log(key); //will not print anything because map are not iteratable in for in loop
// }
