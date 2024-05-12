"use strict";
function my_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = my_album("ali", "rang-e-mohabat");
let album2 = my_album("mustafa", "rang-e-roshni");
let album3 = my_album("murtaza", "rang-e-dil");
console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks
function my_album2(artistName, albumTitle, numberofTracks) {
    return { artistName, albumTitle, numberofTracks };
}
let album4 = my_album2("ali", "ajeeb sa dard", 30);
let album5 = my_album2("mustafa", " ajeeb kahani", 22);
let album6 = my_album2("murtaza", "typescript ki dastaan", 2);
console.log(album4);
console.log(album5);
console.log(album6);
