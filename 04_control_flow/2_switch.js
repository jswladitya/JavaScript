//ek key hota he & uske ham multiple values check karte he 
//shortcut: shift + Alt + down arrow --> duplicate 


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//example
const month = 3
//NOTE: if string declare kia he toh case: string hi dena
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("default case match");  
        break;  
        //kuch match nhi hua toh default execute hoga
        //if break nhi likha to jo bhi match hua he uske niche ke cases bhi print ho jayege except default
}
