// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

// chiedo all'utente di inserire una parola 
// let wordUser = prompt("inserisci una parola");
// let wordUserSplit = wordUser.split("");
// console.log(wordUserSplit);

// let wordUserReverse = wordUserSplit.reverse();
// console.log(wordUserReverse);

// let wordFinal = wordUserReverse.join("");
// console.log(wordFinal);

// if(wordUser == wordFinal){
//     console.log('la parola è palidroma');
//   } else {
//     console.log('la parola non è palidroma');
//   }


// let wordUser = palidromeWord(prompt("inserisci una parola"));
// // creazione funzione ( vengono applicati tutti i passaggi fatti prima in una singola riga
//   function palidromeWord(wordUser) {
//     let word = wordUser.split('').reverse().join(''); 
    
//     return word;
//   }

// console.log(wordUser)

// if(wordUser == palidromeWord(wordUser)){
//     console.log('la parola è palidroma');
// } else {
//     console.log('la parola non è palidroma');
// }



// let parola = prompt("inserisci una parola");
// let carattere;
// let parolaInversa = '';

// let i = parola.length - 1;
// // ciclo che gira sulla parola all'inverso ed unendo grazie a "+=" riforma la parola invertita -- i-- è utilizzato per andari all'inverso
// while (i >= 0) {
//   carattere = parola[i];
//   parolaInversa += carattere;
//   console.log(parolaInversa)
//   // console.log(carattere);
//   i--;
// }

// console.log(parolaInversa);

// prova con function

let parola = prompt("inserisci una parola");
let parolaInversa = inverso(parola);




if(parola == parolaInversa){
    console.log('la parola è palidroma');
  } else {
    console.log('la parola non è palidroma');
  }



  function inverso(boh) {

    let parolaInversa = '';
    
let i = parola.length - 1;
while (i >= 0) {
  parolaInversa += boh[i];
  i--;
}
return parolaInversa;
  }
