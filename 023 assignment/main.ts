let car :string = 'suburu';

//task 1:equality comparision (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); // True

//task 2 : strict equality comparision (true)
console.log("Is car === 'subaru'? I predict true.");
console.log(car == 'subaru'); // True

//task 3 : inequality comparision (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); // False

//task 4:strict inequality comparision (false)
console.log("Is car !=='subaru'? I predict true.");
console.log(car !== 'subaru'); // False

 //task 5: less then comparision (false)
console.log("is car < 'subaru'? I predict true.");
console.log(car < 'subaru'); // False (lexicographic comparision)

//task 6: greater then comparision (false)
console.log("is car > 'subaru'? I predict true.");
console.log(car > 'subaru'); // False (lexicographic comparision)

//task 7: less then or equal  comparision (true)
console.log("is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); // true

//task 8: greater then or equal comparision (true)
console.log("is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); // true

//task 9: checking truthiness (true)
console.log("is car? I predict true.");
console.log(car); // true (non empty string is truely)

//task 10: checking falseness (true)
console.log("is car? I predict false.");
console.log(car); // false (negation of a truely value)