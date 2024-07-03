//promises are the objects
//they are used to doan async task, DB calls , cryptography, network

//Making of promises

// this promise will print something in 1 sec
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task is completed');
        resolve()
    }, 1000)
})


//consumption of promise

//then ka seedha connection hota he resolve ke sath & dono ko connect karne ke lie write resolve() by making of that promise
promiseOne.then(function () {
    // console.log("Promise consumed");
})


//another example in better way
new Promise(function (resolve, reject) {
    setTimeout(function () {
        //   console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    // console.log("Async 2 resolved");
})




//making of 3rd promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {

        // jyada tar resolve me object pass kia jata he
        resolve({ username: "Aditya", email: "jaiswaladitya116@gmail.com" })
    }, 1000)
})


// how to take data ---> assume us object ko user bula rahe ho
promiseThree.then(function (user) {
    console.log(user); //we got the object here
    console.log(user.username); //aditya
})




//making of 4th Promise
const promiseFour = new Promise(function (reslove, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            reslove({ username: "aditya", password: "123" })
        }
        else {
            reject('Error : Something Went Wrong')
        }
    }, 1000)

})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
//finally always be printed by defalut





//making of 5th promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            reslove({ username: "javascript", password: "123" })
        }
        else {
            reject('Error : JavaScript Went Wrong')
        }

    }, 1000)
})



//promise consumtion using async await
//async likha toh use function ke rup me likhte he & async likha matlb response ane wala he
async function consumePromiseFive() {
    // const response = await promiseFive
    // // means promiseFive se jo bhi data reslove hoke aye uska waiting ho raha he coz response ane me time lag sakte he
    // console.log(response);

    // since error bhi he toh pure ko try catch me wrap kardo
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



// another interesting example using fetch library

// async function getAllUsers(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     // response.json() //url se jo bhi data aa rha he wo string he & use hame object me parse karna hota he
//     // const data = response.json()
//     const data = await response.json()
//     console.log(data);

//    }
//     catch(error) {
//       console.log("E:" , error);
//    }
// }
// // response.json he use bhi ane me time lagta he toh use bhi await karana padega
// getAllUsers()



// Doing same thing using .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))