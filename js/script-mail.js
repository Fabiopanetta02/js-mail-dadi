/*Mail
1--Crea (inventa) una lista di indirizzi mail autorizzati.
2--Chiedi all’utente la sua email,
3--controlla che sia nella lista di chi può accedere,
4--stampa in console un messaggio appropriato sull’esito del controllo. 
("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/

//1--Crea (inventa) una lista di indirizzi mail autorizzati.
const emailCorrect = ["pinco@gmail.com", "pallino@gmail.com", "cip@gmail.com", "cop@gmail.com"];
console.log(emailCorrect);

//2--Chiedi all’utente la sua email,
const emailUser = prompt("Qual'è la tua email?", "pinco@gmail.com");
console.log(emailUser);

//3--controlla che sia nella lista di chi può accedere
let fleg = false
for (let i = 0; i < emailCorrect.length; i++){
    if(emailUser == emailCorrect[i]){
        fleg = true
    }
}

if(fleg == true){
    console.log('Benvenuto')
}
else{
    console.log('Spiacenti')
}

