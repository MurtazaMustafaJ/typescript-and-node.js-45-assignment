"use strict";
//EXERCISE 44
// function make_sandwich (...item:string[]) {
//     console.log(`Making a sandwich with:${item.join(', ')}.`);
// }
// make_sandwich("ham", "cheese");
// make_sandwich("lettuce","tomato");
// make_sandwich("avocado" ,"sprouts", "musturd", "mayo");
//EXERCISE 45
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ['year', "2020"]));
console.log(make_car("ford", "fiesta", ['color', 'blue'], ["sunroof", true]));
