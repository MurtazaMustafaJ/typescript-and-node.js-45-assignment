"use strict";
let places = ['Karachi', 'faisalabad', 'new york', 'bankok', 'china'];
console.log('orignal' + places);
// print  your array in alphabetical order without modifying the actual list.
console.log('copy' + [...places].sort());
//show that your array is still in its orignal by printing it.
console.log("orignal" + places);
//print your array in reverce alphabetical order without changing the order of the orignal list.
console.log('copy' + [...places].sort().reverse());
//show that your array is still in orignal order by printing it again.
console.log('copy' + [...places].sort().reverse());
