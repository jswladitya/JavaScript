//Immediately invoked function expressions (IIFE)
//ham chahte ki hamara function immediately execute ho jaye global scope se pollute hue bina

//normal method --> ye global scope variables he ya jo bhi declarations he unse pollute ho sakte he toh un polltants ko remove karne ke lie we have to use IIFE
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

//IIFE METHOD
(
    function chai(){
        //named IIFE
        console.log(`DB CONNECTED`);
    }
)();
//() --> 1st bracket me ham function ki defination likhte he
//(); --> 2nd bracket represent karta he usi function ka execution call and phir ; ye bhi lagana zaroori he taki wo function end ho jaye aur dusra function execute ho

//example 2 --> using Arrow function
(
    (name) => {
        //Simple/unnamed IIFE
        console.log(`DB CONNECTED TO ${name}`);
    }
)('aditya');

