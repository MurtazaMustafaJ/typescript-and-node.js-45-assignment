"use strict";
let My_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < My_number.length; i++) {
    if (My_number[i] == 1) {
        console.log(`${My_number[i]}st`);
    }
    else if (My_number[i] == 2) {
        console.log(`${My_number[i]}nd`);
    }
    else if (My_number[i] == 3) {
        console.log(`${My_number[i]}rd`);
    }
    else if (My_number[i] >= 4 && My_number[i] <= 9) {
        console.log(`${My_number[i]}th`);
    }
}
