let age:number = 25

// if the person is less than 2 years old , print a message that the person is baby.

if(age>2){
    console.log("the person is baby.")
}
// if the person is atleast 2 years old but less than 4, print a message that the person is toddler.

else if (age>=2 && age<4) {
    console.log("the person is toddler")
}
// if the person is atleast 4 years old but less than 13, print a message that the person is kid.

else if (age>4 && age<13) {
    console.log("the person is kid")
}
// if the person is atleast 13 years old but less than 20, print a message that the person is teenager.

else if (age>13 && age<20) {
    console.log("the person is teenager")
}

// if the person is atleast 20 years old but less than 65, print a message that the person is an adult.

else if (age>20 && age<65) {
    console.log("the person is an adult")
}
// if the person is age 65 years or older , print a message that the person is elder.

else {
    console.log("the person is an elder")
}