//apro il ciclo nel quale ogni volta chiederò un numero all'utente
//e quel numero lo aggiungo al totale;

let result = 0;

for(let i = 0; i < 10; i++){

    //chiedo il numero
    let num = Number(prompt("Inserisci un numero"));

    //aggiungo il numero al totale
    result += num;
}

//stampo il risultato
alert(result);