/*Gioco dei dadi
1--Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
*/

//1-Numero casuale per il computer
const randomComputer = Math.floor(Math.random() * 6) + 1;
console.log('computer' , randomComputer);

//2-Numero casuale per il giocatore
const randomPlayer = Math.floor(Math.random() * 6) + 1;
console.log('player' , randomPlayer);

//3-Stabilire il vincitore
if(randomPlayer > randomComputer){
    console.log('Ha vinto il Player');
}
else if(randomPlayer < randomComputer ){
    console.log('Ha vinto il Computer');
}