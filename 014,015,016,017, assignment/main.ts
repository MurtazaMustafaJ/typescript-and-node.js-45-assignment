let guest_list: string []=['ali','mustafa','murtaza'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir ' + guest_list[i] + ',\n I invite you on dinner tomorrow.\n\n thank you' )
// }

//task 15
let not_coming:string = "mustafa";
let new_guest:  string = "babar azam";
guest_list[1] = new_guest
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir ' + guest_list[i] + ',\n I invite you on dinner tomorrow.\n\n thank you' )
// }
console.log(`Mr. ${not_coming} will not join us tomorrow`);

guest_list.unshift("shaheen","sharukh","rizwaan");
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir ' + guest_list[i] + ',\n I invite you on dinner tomorrow.We have found bigger table so i decided to invite 3 more guest.\n\n thank you' )
// }
console.log("\nunfortunately we can't arranged bigger table,only two peaple are allow.");
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry sir.${remove_guest} you are not invited to dinner`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir ' + guest_list[i] + ',\n Yes you are still invited at tomorrow dinner.\n\n thank you' )
}
guest_list.splice(0,2)
console.log(guest_list);