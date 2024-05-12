let car: string = 'subaru';
let age: number = 25;
let number: number[] = [1, 2, 3, 4];

//task 1: Equality (true)
console.log("is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true (case-insensitivity)

//task 2: strict Equality (false)
console.log("is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); // false (case-sensitivity)

//task 3: Inequality (true)
console.log("is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // true

//task 4: Inequality (false)
console.log("is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // false (case-sensitivity)

//task 5: lowercase conversion (true)
console.log("is car.tolowercase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

//task 6: lowercase conversion (false)
console.log("is car === car.tolowercase()? I predict False.");
console.log(car === car.toLowerCase()); // False (orignal valsue remain uppercase)

//** numerical test**
 
//task 7: Equality (true)
console.log("Is age == 25? I predict True.");
console.log(age== 25); // True

//task 8: Inequality (false)
console.log("Is age != 30? I predict true.");
console.log(age!= 30); // true


//task 9: greater than (false)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // false

//task 10: less than or equal  (true)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // true

// **logical oprators**

//task 11: AND (true)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30); // true (both condition met)

//task 12: OR (false)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18); // False (neither condition met)

// **array test**

//task 13: in array (true)
console.log("is 3 in number? I predict True.");
console.log(3 in number); // true (check for index existenc)

//task 14: not in array (false)
console.log("Is 5 not in number? I predict true.");
console.log(5 not in number); // true (negation of "in" oprators)
