"use strict";
//EXERCISE 41
// let magicians: string [] = ["brad","mustafa","ali"];
// function show_magicians (magicians:string[]){
//     magicians.forEach(magician  => {
//         console.log(magician);
//     });
// }
// show_magicians(magicians);
// excercise 42
// great magician: Start with a copy of your programfrom exercise 41.
// let magicians:string[] = ["don","rameez","nick"];
// function make_great(magicians:string[]) {
//     for(let i= 0; i < magicians.length; i++){
//         magicians[i] = magicians[i]  +  "  the great";
//     }
// }
// make_great(magicians); // modifies the original array
// show_magician(magicians); // shows modifies names
//EXERCISE 43
let magicians = ["alice", " david", "chiris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician}  the great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice()); //creates new modified array
console.log("orignal magicians");
show_magicians(magicians); // shows orignal names
console.log("Great magicians:");
show_magicians(greatMagicians); // shows modified names      
