//here we will learn ki object ko singleton and constructer ki help se kaise declare karte he


// const tinderUser = new Object() //Singleton object
const tinderUser = {}; //Non singleton object
//NOTE: dono hi tarike sahi he object ko declare karne ke

//ab us tinder user ko kuch data dete he
tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //Array me saare data print, eg : {id: "123abc", name:"aditya"}

//nested object
const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aditya",
      lastname: "Jaiswal"
    }
  }
}
//Excess
// console.log(regularuser.fullname);//. laga laga ke nesting open kar sakte he
// console.log(regularuser.fullname.userfullname.firstname);

//combining multiple objects into 1 object
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

//using spread like we learned in array
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


//database se jab users ka info ata he toh array of object ata he seperated by commas 
//means array ke ander objects he
const users = [
    {
        id : 1,
        email : "jaiswaladitya116@gmail.com"
    },
    {
        id : 2,
        email : "jaiswaladitya116@gmail.com"
    }
]

//Excess
users[1].email //since wo ek aray he so uski values access karne ke lie indexing use karte he, yaha array ki first value access ki ja rahi he

// console.log(users[1].email);

//interesting --> keys ka array
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); 
//means object ki saari sirf keys(left side wale) dedo jo ki object tinderuser he
// console.log(Object.values(tinderUser)); //left side wale
console.log(Object.entries(tinderUser)); 
//saari key-value pairs ka array banega jo ki ek bade array me store hoga

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
//ham puch rahe he tinderuser is object se ki kya uske pass isLOggedIn naam ki koi property he



//Object destructuring 
const course = {
  courseName : "Js in hindi",
  price : "999",
  courseTeacher : "Aditya"
}
//ab in values ko ager use karna ho to kaise kaie karege
// course.courseTeacher //1st Method , isi me console.log lagake

const {courseTeacher : teacher} = course // kaha se values exxtract kar rhe he course mese, and kya value extract karni he wo likhenge curly braket me
//courseTeacher ko ham kuch bhi naam de sakte he isi ko kehte he destructuring
console.log(teacher);





//JSON API 
//JSON object jaisa hi dikhta he , object ka naam define jata he but JSON ka naam nhi likha jata & JSON me left side string me likha hota he

// {
//   "courseName" : "Js in hindi",
//   "price" : "999",
//   "courseTeacher" : "Aditya"
// }

