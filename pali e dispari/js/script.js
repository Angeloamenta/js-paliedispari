// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// l'utente sceglie se pari o dispari 
 let pari = prompt(" scegli pari o dispari");
 let tryDis = false;

 if (pari == "dispari") {
   tryDis = true
 }

// l'utente sceglie un numero da 1 a 5 
let numberUser = parseInt(prompt("scegli un numero da uno a 5"));
console.log(numberUser);

// genero un numero random per il pc
let pcNUmber = Math.floor(Math.random() * 5) + 1;
console.log(pcNUmber);

let somma = (numberUser + pcNUmber);
console.log(somma);
// dispari
if (somma % 2 == 1 && tryDis == true) {
  console.log ("vince il PC");
} else {
  console.log ("vince il Giocatore");
}