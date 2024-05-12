interface item {
    name:string
    price:number
}
//creating two object
const book : item ={
    name: ' TYPESCRIPT'
    price:350
}
const wonder: item ={
    name: 'wonder'
    price:450
}
console.log(`book name: ${book.name}, price:${book.price}`)
console.log(`wonder name: ${wonder.name} , price:${wonder.price}`)