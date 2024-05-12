"use strict";
let current_user = ["ali", "mustafa", "murtaza", "mohamed", "burhan"];
let new_user = ["raza", "ahmad", "hatim", "hassan", "fahad"];
new_user.forEach((newUser) => {
    if (current_user.some((currentuser) => currentuser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username. `);
    }
    else {
        console.log(`${newUser} is available .`);
    }
});
