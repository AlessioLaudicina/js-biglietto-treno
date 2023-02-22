/* Il programma dovrà chiedere all’utente 
il numero di chilometri che vuole percorrere 
e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


const numeroKm = parseInt (prompt('Quanti Km devi percorrere?'));
console.log(numeroKm);

const etaPassegero = parseInt (prompt('Quanti anni hai?'));
console.log(etaPassegero);


let prezzo = numeroKm * 0.21;
console.log(prezzo);

let discountOver = (prezzo * 0.4)
let discountUnder = (prezzo * 0.2)

if(etaPassegero > 64){
    console.log( prezzo - discountOver
    )
    
}

if(etaPassegero < 18){
    console.log( prezzo - discountUnder 
    )
    
}

document.getElementById('prezzo').innerHTML = prezzo



