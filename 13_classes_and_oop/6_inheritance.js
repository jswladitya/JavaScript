class User {
    constructor(username){
        this.username = username
    }

    //Method
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


//Hamare pass user aa chuka he ab hame ise Teacher banana he
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        //super keyword refers ki jo class ko aap extend kar rahe the ie.., User us class ke ander jata hu apne this ko bhi le jata hu waha pe jake me username set kar dunga waha pe aur aap directly uska eccess bhi le payenge yaha pe
        //means ab hame call ka concept use nahi karna padega
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com", "123" )

chai.addCourse()

const masalaChai= new User("masalaChai")
masalaChai.addCourse() //iske pass addCourse ka access nahi he kyuki ye alag class me he parent class he islie aur parent class ke pass child class ka access nahi hota

//we can say equal nahi he chai aur masalaChai but chai instance he Teacher ka
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true