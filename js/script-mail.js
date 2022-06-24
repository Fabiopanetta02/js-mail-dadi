/*Mail
1--Crea (inventa) una lista di inidirizzi mail autorizzati.
2--Chiedi all’utente la sua email,
3--controlla che sia nella lista di chi può accedere,
4--stampa in console un messaggio appropriato sull’esito del controllo. 
("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/

//1--Crea (inventa) una lista di inidirizzi mail autorizzati.
const emailCorrect = ["pinco@gmail.com", "pallino@gmail.com", "cip@gmail.com", "cop@gmail.com"];
console.log(emailCorrect);

//2--Chiedi all’utente la sua email,
let emailUser = prompt("Qual'è la tua email?", "pinco@gmail.com");
console.log(emailUser);

//3--controlla che sia nella lista di chi può accedere
for (let i = 0; i < emailCorrect.length; i++){
    if(emailUser == emailCorrect[i]){
        console.log('Benvenuto');
    }
    else{
        console.log('Spiacenti')
    }
}
