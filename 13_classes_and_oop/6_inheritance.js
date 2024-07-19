class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        //super keyword refers ki jo class ko aap extend kar rahe the us class ke ander jata hu apne this ko bhi le jata hu waha pe jake me username set kar dunga aur aap directly uska eccess bhi le payenge yaha pe
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
masalaChai.addCourse() //iske pass addCourse ka access nahi he kyuki ye alag class me he

//we can say equal nahi he chai aur masalaChai but chai instance he Teacher ka
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true