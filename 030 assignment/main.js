"use strict";
let username = ['sana', 'mustafa', 'taha', 'murtaza', 'ali'];
for (let user of username) {
    if (user === "admin") {
        console.log("hello admin ,would you like to see a status report ?");
    }
    else {
        console.log(`hello ${user} thankyou for logging in again`);
    }
}
