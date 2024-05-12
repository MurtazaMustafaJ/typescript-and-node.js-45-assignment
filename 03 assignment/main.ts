// lower case
let personname: string = "Mustafa"
console.log("lowercase:", personname.toLocaleLowerCase());

//  upper case
console.log("uppercase:",personname.toUpperCase());

//  Title case
console.log("titlecase:", personname.replace(/\bw/g,c => c.toLocaleUpperCase()));


