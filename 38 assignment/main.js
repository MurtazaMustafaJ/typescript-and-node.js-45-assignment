"use strict";
//task 38
function describe_city(name_of_city, country = "Pakistan") {
    return `${name_of_city} is in ${country}`;
}
//3 cities
let city1 = describe_city("Karachi");
let city2 = describe_city("hyderabad");
let city3 = describe_city("larkhana");
let city4 = describe_city("islamabad");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
