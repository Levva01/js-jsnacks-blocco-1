//chiedo all'utente di inserire due numeri
//i numeri li salvo in due variabili
const n1 = prompt("Inserisci il primo numero");
const n2 = prompt("Inserisci il secondo numero");

//stampo il maggiore
if(n1 > n2){
    alert(n1);
} else if(n2 > n1){
    alert(n2);
} else{
    alert("Numeri uguali");
}