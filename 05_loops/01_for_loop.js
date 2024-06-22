//for loop
for(let i =0; i<=10; i++){
    const element = i;
    // console.log(element);
}

// console.log(element); //not accessable because it is blocked scoped



//nested loops ---> printing tables
for (let i = 1; i <=10; i++) {
    // console.log(`Table of: ${i}`);
    for(let j = 1; j<=10;j++){
        // console.log(`inner loop value : ${j} & Outer loop ${i}`);
        // console.log(i + `*` + j + `=` + i*j );
    }
    
}


let myArray = ["Flash", "Aquaman", "Ironman"]
// console.log(myArray.length);//3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//break --> control flow ko break karke loop ke bahar kud jao 
//continue --> us particular iteration ko skip karo


//break
for (let i = 0; i <=10; i++) {
    if ( i == 5){
        // console.log("5 detected");
        break;
    }
    // console.log(`Value of i is : ${i}`);
}

//continue
for (let i = 0; i <=10; i++) {
    if ( i == 5){
        console.log("5 detected , let us skip that");
        continue;
    }
    console.log(`Value of i is : ${i}`);
}