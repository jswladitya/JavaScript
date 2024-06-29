//promises are the objects

//making of promises
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    } , 1000)
})      


//comnsumption on promise

//then ka seedha connection hota he resolve ke sath & dono ko connect karne ke lie write resolve() by making of that promise
promiseOne.then(function(){
    console.log("Promise consumed");
})


//another example in better way
new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Async task 2");
      resolve()
    } , 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//making of 3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aditya" , email: "jaiswaladitya116@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user.username);
})

//making of 4th Promise
const promiseFour = new Promise(function(reslove, reject){
setTimeout(function(){
    let error = true
    if(!error){
        reslove({username:"aditya" , password:"123"})
    }
    else{
        reject('Error : Something Went Wrong')
    }

} , 1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("Your promise is either resolved or rejected"))


//making of 5th promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({username:"javascript" , password:"123"})
        }
        else{
            reject('Error : JavaScript Went Wrong')
        }
    
    } , 1000)
})



//promise consume in another way
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
try{
    const response = await promiseFive
    console.log(response);
} catch (error){
    console.log(error);
}
}

consumePromiseFive()