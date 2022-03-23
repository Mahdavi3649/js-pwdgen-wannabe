//Chiedi all’utente il suo nome, il cognome e il suo colore prefrito

//Chiedi all’utente il suo nome
const first_name = prompt("what's your name?!")
console.log(first_name)


//chiedi il suo cognome
const last_name = prompt("what's your last name?!")
console.log(last_name)

//chiedere il suo colore prefrito
const fav_color = prompt("what's your favourite color?!")
console.log(fav_color)

document.getElementById("user").innerHTML = first_name + last_name + fav_color + 22
