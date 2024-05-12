let places:string[] = ['Karachi','faisalabad','new york','bankok','china']
console.log('orignal'  + places);

// print  your array in alphabetical order without modifying the actual list.
console.log('copy'   + [...places].sort());

//show that your array is still in its orignal by printing it.
console.log("orignal"   + places);

//print your array in reverce alphabetical order without changing the order of the orignal list.
console.log('copy'   + [...places].sort().reverse());

//show that your array is still in orignal order by printing it again.
console.log('copy'   + [...places].sort().reverse());

// Reverse the order of your list. print the array to show that its order is change.
console.log('orignal'  + places.sort());

// reverse your order of your list again. Print the list to show its back to its orignal order.
console.log('orignal'  + places.sort().reverse());

