let adjective = prompt("Enter an adjective");
let name = prompt("Enter a name");
let friendname = prompt("Enter a friend's name");
let place = prompt("Enter a place");
let adjective2 = prompt("Enter a 2nd adjective");
let adjective3 = prompt("Enter a 3rd adjective");
let creature = prompt("Enter a creature's name");
let pluralnoun = prompt("Enter a plural noun");

let story = `On a <span>${adjective}</span> Halloween night, <span>${name}</span> and <span>${friendname}</span> dared to enter the <span>${place}</span> known as the <span>${adjective2}</span> Graveyard. It was said that a <span>${adjective3}</span> <span>${creature}</span> roamed the grounds, searching for <span>${pluralnoun}</span> to claim.`;

let output = story;

document.getElementById('output').innerHTML = output;