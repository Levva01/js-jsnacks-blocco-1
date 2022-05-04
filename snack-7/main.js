//creo due array con nomi e cognomi

const nomi = [
    "Giulia",
    "Stella",
    "Federico",
    "Sara",
    "Simone"
];

const cognomi = [
    "Rossi",
    "Verdi",
    "Bianchi",
    "Ferrari",
    "Russo"
];

//faccio un ciclo per riempire l'array
for(let i = 0; i < 5; i++){

    //genero due numeri random
    let randomNome = Math.floor(Math.random() * 5);
    let randomCognome = Math.floor(Math.random() * 5);

    //mando a schermo il risultato
    console.log(`${nomi[randomNome]} ${cognomi[randomCognome]}`);
    
}
